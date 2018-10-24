var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

/*** Init on DOM ready ***/
$(function() {
	// mobile only
		if (viewportWidth < 768) {
			initMobileMenu();
			// initMobileSearch();
			// initAboutGallery();
		}
		// $( window ).on('orientationchange', function() {
		// 	initAboutGallery('recalc');
		// });

	// everything else
		if ( $('#trainings-table').length > 0 ) {
			initTrainings();
		}

		if (viewportWidth >= 768)
			$('header.vertical .bg-slant').css('height', ($('body').height()+250)+'px');
});

/*** MAIN MENU ***/
$(window).scroll(function() {
	if($(window).scrollTop() > 0 && viewportWidth > 1024) {
		$('header.slant').addClass('vertical');
	} else {
		$('header.slant').removeClass('vertical');
	}
});

/*** MOBILE MENU ***/
function initMobileMenu() {
	var isBurgerOpen = false;

	$('header .burger').on('touchend', function() {
		if (isBurgerOpen) {
			$('#mmenu, .ap-icon-facebook').fadeOut(200);
			$('.burger, .ap-icon-facebook').css('position', 'absolute');
			$(document).scrollTop(pageScrollPos);
		}
		else {
			$('#mmenu, .ap-icon-facebook').fadeIn(200);
			$('.burger, .ap-icon-facebook').css('position', 'fixed');
			pageScrollPos = $(document).scrollTop();
		}

		$(this).toggleClass('open');
		isBurgerOpen = !isBurgerOpen;
	});
}

/*** MOBILE SEARCH ***/
// function initMobileSearch() {
// 	var isSearchOpen = false;

// 	$('header .search').on('touchend', function() {
// 		if (isSearchOpen) {
// 			$('.search-header input').blur();
// 			$('.search-header').slideUp(200);
// 		} else {
// 			$('.search-header').slideDown(200);
// 			setTimeout(function() {
// 				$('.search-header input').focus();
// 			}, 200);
// 		}

// 		$(this).toggleClass('open');
// 		isSearchOpen = !isSearchOpen;
// 	});
// }

/*** ABOUT - GALLERY ***/
/*
function initAboutGallery(action) {
	var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
		container = $('.row-about-gallery'),
		containerMargin = -18,
		item = $('.row-about-gallery .gallery-item'),
		itemCount = item.length,
		itemActive = 1;

	// set thumb width
	item.width(vpWidth - 60);

	if (action == 'recalc') {
		var itemActiveIndex = $('.row-about-gallery .gallery-item.active').index();
		var recalcMargin = -18;
			recalcMargin -= (itemActiveIndex === 0) ? 0 : (item.outerWidth(true) * itemActiveIndex);
		container.css('margin-left', recalcMargin+'px');
		return true;
	}

	// binds
	$(item).on('swipeleft', function() {
		if (itemActive < itemCount) {
			containerMargin -= item.outerWidth(true);
			container.css('margin-left', containerMargin+'px');
			itemActive += 1;
			$('.row-about-gallery .gallery-item').removeClass('active').eq(itemActive-1).addClass('active');
		}
	});
	$(item).on('swiperight', function() {
		if (itemActive > 1) {
			containerMargin += item.outerWidth(true);
			container.css('margin-left', containerMargin+'px');
			itemActive -= 1;
			$('.row-about-gallery .gallery-item').removeClass('active').eq(itemActive-1).addClass('active');
		}
	});
}
*/


/*** TRAININGS ***/
var activeSort = 'EventStartDate',
	activeOrder = 'asc',
	activePage = 1,
	activeOffset = 0;

function loadTrainings(sort, order, skip) {
	sort = typeof sort !== 'undefined' ? sort : 'EventStartDate';
	order = typeof order !== 'undefined' ? order : 'asc';
	skip = typeof skip !== 'undefined' ? skip : 0;

	var totalCount,
		currentCount,
		pageItems = 10;

	var today = new Date();
	var todayIso = today.toISOString();
	var queryUrl = 'http://poodapi.aripaev.ee/v4/Products';
	var queryParams = {
		// '$select' : '*',
		'$select' : 'Id,Name,SubTitle,EventStartDate,EventEndDate,AdditionalDescription,ProductPersons',
		'$filter' : 'Deleted eq false and ProductTemplateId eq 4 and EventStartDate ge '+todayIso,
		'$expand' : 'ProductPersons($expand=Person($select=FirstName,LastName))',
		'$orderby': sort+' '+order,
		'$top'    : pageItems,
		'$skip'   : skip,
		'$count' : 'true'
	};
	queryUrl += '?' + $.param(queryParams);
	// console.log(queryUrl);

	function formatDate(date) {
		var fdate = new Date(date);
		return ("0" + fdate.getDate()).slice(-2)+'.'+("0" + (fdate.getMonth() + 1)).slice(-2)+'.'+fdate.getFullYear();
	}

	$.ajax({
		method: 'GET',
		timeout: 5000,
		url: queryUrl
	}).fail(function(error) {
		console.log('loadTrainings: ERROR contacting poodapi.aripaev.ee!', error);
	}).done(function(data) {
		totalCount = data['@odata.count'];
		currentCount = data.value.length;

		if (currentCount === 0) {
			$('#trainings-table .loading').html('<p class="error">Koolitusi ei leitud!</p>');
			return;
		} else {
			$('#trainings-table .placeholder, #trainings-table .table-row, #trainings-table .table-footer').remove();
			$('#trainings-table .loading').fadeOut(100);
			// console.log('got:',dataCount);
		}

		$(data.value).each(function(index) {
			var item = $(this)[0];
			var date = ( new Date(item.EventStartDate) < new Date(item.EventEndDate) ) ? formatDate(item.EventStartDate)+' - '+formatDate(item.EventEndDate) : formatDate(item.EventStartDate);

			if (item.ProductPersons.length > 0) {
				firstName = (item.ProductPersons[0].FirstName) ? item.ProductPersons[0].FirstName : item.ProductPersons[0].Person.FirstName;
				lastName = (item.ProductPersons[0].LastName) ? item.ProductPersons[0].LastName : item.ProductPersons[0].Person.LastName;
			}

			subtitle = (item.SubTitle !== null) ? item.SubTitle :'';

			var template = '<div class="table-row">'+
				'<a href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'" target="_blank">'+
					'<div class="table-cell date">'+date+'</div>'+
					'<div class="table-cell title"><h3>'+item.Name+'</h3><p>'+subtitle+'</p></div>'+
					'<div class="table-cell duration hidden-xs">'+item.AdditionalDescription+'</div>'+
					'<div class="table-cell trainer">'+firstName+' '+lastName+'</div>'+
					'<div class="table-cell more"><span class="text hidden-xs">Vaata lähemalt</span><span class="ap-icon-arrow-a"></span></div>'+
				'</a>'+
			'</div>';

			$('#trainings-table .items').append(template);
		});

		// pagination
		var nrOfPages = totalCount / pageItems;

		var footer = '<div class="table-footer">';
		for (var i = 0; i < Math.ceil(nrOfPages); i++) {
			var ii = i+1;
			var offset = (ii * pageItems) - pageItems;
			var last = ((Math.ceil(nrOfPages)-1) == i) ? totalCount : ii * pageItems;
			var isActive = (activePage == ii) ? 'active' : '';

			footer += '<a class="'+isActive+'" href="#'+ii+'" data-offset="'+offset+'" data-pagenr="'+ii+'">'+(offset+1)+'-'+last+'</a>';

			// if ((Math.ceil(nrOfPages)-1) == i) {
				// footer += '<a href="#" data-offset="'+(activePage * pageItems)+'" data-pagenr="'+activePage+'" class="ap-icon-arrow-r"></a>';
			// }
		}
		footer += '</div>';

		$('#trainings-table .items').append(footer);

		// pagination bind
		$('.table-footer a').click(function(e) {
			e.preventDefault();
			$('#trainings-table').scrollToTrainings();
			$('#trainings-table .loading').fadeIn(100);

			loadTrainings(activeSort,activeOrder,$(this).data('offset'));
			activePage = $(this).data('pagenr');
			activeOffset = $(this).data('offset');
		});
	});
}

$.fn.extend({
	scrollToTrainings: function () {
		var x = jQuery(this).offset().top - 30;
		jQuery('html,body').animate({scrollTop: x}, 200);
	}
});

function refreshTrainings(sort, $this) {
	$('#trainings-table .loading').fadeIn(100);

	if ( !$this.hasClass('active') ) {
		// first click on said header
		if ( $this.hasClass('asc') )
			loadTrainings(sort, 'asc', activeOffset);
		else
			loadTrainings(sort, 'desc', activeOffset);

		$this.addClass('active').siblings().removeClass('active');

	} else {
		// every subsequent click
		if ( $this.hasClass('asc') ) {
			loadTrainings(sort, 'desc', activeOffset);
			activeOrder = 'desc';
		}
		else {
			loadTrainings(sort, 'asc', activeOffset);
			activeOrder = 'asc';
		}

		$this.toggleClass('asc');
	}
}

function initTrainings() {
	loadTrainings();

	// Binds
	$('#trainings-table .table-cell.date').click(function() {
		refreshTrainings('EventStartDate', $(this), activeOffset);
		activeSort = 'EventStartDate';
	});

	$('#trainings-table .table-cell.title').click(function() {
		refreshTrainings('Name', $(this), activeOffset);
		activeSort = 'Name';
	});

	$('#trainings-table .table-cell.duration').click(function() {
		refreshTrainings('AdditionalDescription', $(this), activeOffset);
		activeSort = 'AdditionalDescription';
	});

	/*$('#trainings-table .table-cell.trainer').click(function() {
		refreshTrainings('ProductPersons/Person/LastName', $(this));
	});*/
}


/*** TRAINERS - UPCOMING ***/
if ( $('.upcoming').length > 0 ) {
	var eventItem = $('.upcoming .event'),
		total = eventItem.length,
		margin = 0,
		first = 1;

	if ( viewportWidth > 768 )
		eventItem.width( ($('.upcoming').width() - 30) / 2 );

	if ( total > 2 )
		$('.upcoming .page-nav').show();

	$('.upcoming .page-nav').click(function() {
		// navigation
		if ( $(this).hasClass('next') && first !=  total-1 && total > 2) {
			margin = margin - eventItem.outerWidth(true);
			$('.upcoming .events').css('margin-left', margin+'px');
			first++;
		}
		else if ( $(this).hasClass('prev') && first != 1 ) {
			margin = margin + eventItem.outerWidth(true);
			$('.upcoming .events').css('margin-left', margin+'px');
			first--;
		}
		// update buttons
		if ( first > 1 )
			$('.upcoming .page-nav.prev').removeClass('disabled');
		else
			$('.upcoming .page-nav.prev').addClass('disabled');

		if ( first != total-1 )
			$('.upcoming .page-nav.next').removeClass('disabled');
		else
			$('.upcoming .page-nav.next').addClass('disabled');
	});

	window.addEventListener('orientationchange', function() {
		if ( viewportWidth > 768 )
			eventItem.width( ($('.upcoming').width() - 30) / 2 );
	});
}