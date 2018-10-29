var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


/**
 * Bootstrap Modal JS
 **/
+function(t){"use strict";function e(e,i){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},o.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new o(this,a)),"string"==typeof e?n[e](i):a.show&&n.show(i)})}var o=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};o.VERSION="3.3.7",o.TRANSITION_DURATION=300,o.BACKDROP_TRANSITION_DURATION=150,o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(e){var i=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),s&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(o.TRANSITION_DURATION):i.$element.trigger("focus").trigger(n)}))},o.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(o.TRANSITION_DURATION):this.hideModal())},o.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},o.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},o.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},o.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},o.prototype.backdrop=function(e){var i=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+s).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},o.prototype.handleUpdate=function(){this.adjustDialog()},o.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},o.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},o.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},o.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=o,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var i=t(this),s=i.attr("href"),n=t(i.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),i.data());i.is("a")&&o.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(n,a,this)})}(jQuery);


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

		if (viewportWidth >= 768 & window.location.pathname !== "/loobu-pakkumistest/")
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
//$('header .burger').on('touchend click', function() {
	$('header .burger').on('click', function() {
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


$(function() {
	$('input[name="daterange"]').daterangepicker({
		autoUpdateInput: false,
		opens: 'left'
	}, function(start, end, label) {
		console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
	});

	$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
			console.log(picker.startDate, picker.endDate);
  });

	$('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});

$( "#site-search-date_delete" ).click(function() {
	$('#site-search-date').val('');
});

$('#site-search-date').on('input', function() {
    alert( "Handler for input() called." );
});


/*** TRAININGS ***/
var activeSort = 'EventStartDate',
	activeOrder = 'asc',
	activePage = 1,
	activeOffset = 0;
var dataLoaded = "loadTrainings";
var trainingsList = [];
var categoryList = [];
var dateList = [];

function loadTrainings(sort, order, skip) {
	sort = typeof sort !== 'undefined' ? sort : 'EventStartDate';
	order = typeof order !== 'undefined' ? order : 'asc';
	skip = typeof skip !== 'undefined' ? skip : 0;

	var totalCount,
		currentCount,
		pageItems = 10;

	dataLoaded = "loadTrainings";

	var today = new Date();
	var todayIso = today.toISOString();

//	var queryUrl = 'http://poodapi.aripaev.ee/v4/Products';
//	var queryParams = {
		// '$select' : '*',
//		'$select' : 'Id,Name,SubTitle,EventStartDate,EventEndDate,AdditionalDescription,ProductPersons,ShortDescription,ProductCategories',
//		'$filter' : 'Deleted eq false and Published eq true and ProductTemplateId eq 4 and (EventStartDate ge '+todayIso+' or (EventEndDate ne null and EventEndDate ge '+todayIso+')) and AvailableEndDateTimeUtc ge '+todayIso,
//		'$expand' : 'ProductPersons($expand=Person($select=FirstName,LastName))',
//		'$orderby': sort+' '+order,
//		'$count' : 'true'
//	};

	var queryUrl = 'http://poodapi.aripaev.ee/api/products';
	var queryParams = {
		'Template': 'schooling'
	};

	//'$top'    : pageItems,
	//'$skip'   : skip,
	queryUrl += '?' + $.param(queryParams);
	 //console.log(queryUrl);

	function formatDate(date) {
		var fdate = new Date(date);
		return ("0" + fdate.getDate()).slice(-2)+'.'+("0" + (fdate.getMonth() + 1)).slice(-2)+'.'+fdate.getFullYear();
	}

	$.ajax({
		method: 'GET',
		timeout: 15000,
		url: queryUrl
	}).fail(function(error) {
		console.log('loadTrainings: ERROR contacting poodapi.aripaev.ee!', error);
	}).done(function(data) {
		totalCount = data['@odata.count'];
	//	currentCount = data.value.length;
		currentCount = data.Products.length;


		if (currentCount === 0) {
			$('#trainings-table .loading').html('<p class="error">Koolitusi ei leitud!</p>');
			return;
		} else {
			$('#trainings-table .placeholder, #trainings-table .table-row, #trainings-table .table-footer').remove();
			$('#trainings-table .loading').fadeOut(100);
			// console.log('got:',dataCount);
		}

		trainingsList = [];

//		$(data.value).each(function(index) {
		$(data.Products).each(function(index) {
			var item = $(this)[0];
			//var date = ( new Date(item.EventStartDate) < new Date(item.EventEndDate) ) ? formatDate(item.EventStartDate)+' - '+formatDate(item.EventEndDate) : formatDate(item.EventStartDate);
			var date = ( new Date(item.EventStartDateTimeUtc) < new Date(item.EventEndDateTimeUtc) ) ?
				formatDate(item.EventStartDateTimeUtc)+' - '+formatDate(item.EventEndDateTimeUtc) :
				formatDate(item.EventStartDateTimeUtc);

//Persons
			//if (item.ProductPersons.length > 0) {
			if (item.Persons.length > 0) {
				firstName = (item.Persons[0].FirstName) ? item.Persons[0].FirstName : item.Persons[0].Person.FirstName;
				lastName = (item.Persons[0].LastName) ? item.Persons[0].LastName : item.Persons[0].Person.LastName;
			}
			var trainerName = '';
			for(var count = 0; count < item.Persons.length; count++) {
				//if ("Performer" == item.Persons[count].PersonType) {
				if ("Performer" == item.Persons[count].Type) {
					firstNameTmp = (item.Persons[count].FirstName) ? item.Persons[count].FirstName : item.Persons[count].Person.FirstName;
					lastNameTmp = (item.Persons[count].LastName) ? item.Persons[count].LastName : item.Persons[count].Person.LastName;
					trainerName += firstNameTmp + ' ' + lastNameTmp + ',<BR>';
				}
			}
			if (trainerName.length > 3) {
				trainerName = trainerName.substring(0, trainerName.length-5);
			}

			var categories = [];
			for(var count = 0; count < item.ProductCategories.length; count++) {
				if (0 < item.ProductCategories[count].length) {
					//categories += item.ProductCategories[count] + ',<BR>';
					var n = item.ProductCategories[count].indexOf(">> ");
					if (-1 < n) {
						var currItem = item.ProductCategories[count].substring(n+3);
						categories.push( currItem );
						if (-1 == categoryList.indexOf(currItem)) {
							categoryList.push( currItem );

							var o = new Option(currItem, currItem);
							/// jquerify the DOM object 'o' so we can use the html method
							$(o).html(currItem);
							$("#site-search-category").append(o);

						}
					}

				}
			}
			if (categories.length > 3) {
				categories = categories.substring(0, categories.length-5);
			}

			subtitle = (item.SubTitle !== null) ? item.SubTitle :'';

			//var dateObj = formatDate(item.EventStartDateTimeUtc);
			var dateObj = item.EventStartDateTimeUtc.substring(0, 10);
			//var dateObj = new Date(dateTxt);
			if (-1 == dateList.indexOf(dateObj)) {
				//dateList.push( formatDate(item.EventStartDateTimeUtc) );
				dateList.push( dateObj );
			}
			dateList.sort();

			var trainingRow = {
				Id: item.Id,
				date: date,
				dateSort: formatDate(item.EventStartDateTimeUtc),
				startDate: new Date(item.EventStartDateTimeUtc),
				Name: item.Name,
				subtitle: subtitle,
				duration: item.EventPeriodInfo,
				trainer: trainerName,
				ShortDescription: item.ShortDescription,
				ProductCategories: categories,
			};

			trainingsList.push(trainingRow);
			dataLoaded = "loaded";

	/*		var template = '<div class="table-row table-row-open" id="table-row-'+item.Id+'" id-nr="'+item.Id+'">'+
				''+
					'<div class="table-cell date">'+date+'</div>'+
					'<div class="table-cell title"><h3>'+item.Name+'</h3><p>'+subtitle+'</p></div>'+
					'<div class="table-cell duration hidden-xs">'+item.EventPeriodInfo+'</div>'+
					'<div class="table-cell trainer hidden-xs">'+trainerName+'</div>'+
					'<div class="table-cell more"><span class="text hidden-xs"></span>'+
					'<span class="ap-table-order hidden" id="ap-table-order-'+item.Id+'"></span><span class="ap-table-order-asc" id="ap-table-order-asc-'+item.Id+'"></span></div>'+
					'<div class="table-cell short-description hidden" id="short-description-'+item.Id+'">'+item.ShortDescription+
					'<div> <a class="button register" href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'#registreerimine" target="_blank">Registreeru</a>'+
					'<a class="button info" href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'" target="_blank">Lisainfo</a>'+
					'</div></div>'+
				''+
			'</div>';

			//<a href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'" target="_blank">
			//<span class="ap-icon-arrow-a"></span>
			//</a>

			$('#trainings-table .items').append(template);
*/
		});

		// pagination
		/*var nrOfPages = totalCount / pageItems;

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
		*/

		trainingsList.sort(sortTrainingsByNameAsc);

		// row click bind
	//	$('#trainings-table .table-row-open').click(function(e) {
	//		rowClick( $(this) );
	//	});

		console.log(trainingsList);
		console.log(categoryList);
		console.log(dateList);
		showTrainings(trainingsList);
	});
}

function sortTrainingsByDateAsc(a, b) {
  if (a.startDate === b.startDate) {
      return 0;
  }
  else {
      return (a.startDate < b.startDate) ? -1 : 1;
  }
}

function sortTrainingsByDateDesc(a, b) {
  if (a.startDate === b.startDate) {
      return 0;
  }
  else {
      return (a.startDate < b.startDate) ? 1 : -1;
  }
}

function sortTrainingsByNameAsc(a, b) {
  if (a.Name === b.Name) {
      return 0;
  }
  else {
      return (a.Name < b.Name) ? -1 : 1;
  }
}

function sortTrainingsByNameDesc(a, b) {
  if (a.Name === b.Name) {
      return 0;
  }
  else {
      return (a.Name < b.Name) ? 1 : -1;
  }
}

function sortTrainingsByDurationAsc(a, b) {
  if (a.duration === b.duration) {
      return 0;
  }
  else {
      return (a.duration < b.duration) ? -1 : 1;
  }
}
function sortTrainingsByDurationDesc(a, b) {
  if (a.duration === b.duration) {
      return 0;
  }
  else {
      return (a.duration < b.duration) ? 1 : -1;
  }
}

function rowClick(obj) {
	//if (obj.hasClass("passive")) return;

	var idNr = obj.attr('id-nr');
	var moreTextId = '#short-description-'+idNr;
	var orderId = '#ap-table-order-'+idNr;
	var orderAscId = '#ap-table-order-asc-'+idNr;

	// reset all arrows
	$('.ap-table-order-asc').removeClass("hidden");
	$('.ap-table-order').addClass("hidden");

	if ($(moreTextId).hasClass("hidden")) {
		$(orderId).removeClass("hidden");
		$(orderAscId).addClass("hidden");
		$('.short-description').addClass("hidden");
		$(moreTextId).removeClass("hidden");
		$('.row-table .table-row').addClass("passive");
		obj.removeClass("passive");
	} else {
		$(moreTextId).addClass("hidden");
		$(orderId).addClass("hidden");
		$(orderAscId).removeClass("hidden");
		$('.row-table .table-row').removeClass("passive");
	}
}

function searchTrainings(search, sort, order, skip) {
//function searchTrainings() {
	$('#trainings-table .loading').html('<div class="spinner"></div>');
	$('#trainings-table .loading').fadeIn(100);

	sort = typeof sort !== 'undefined' ? sort : 'EventStartDate';
	order = typeof order !== 'undefined' ? order : 'asc';
	skip = typeof skip !== 'undefined' ? skip : 0;

	var totalCount,
		currentCount,
		pageItems = 10;

	dataLoaded = "searchTrainings";

	var today = new Date();
	var todayIso = today.toISOString();
	var queryUrl = 'http://poodapi.aripaev.ee/api/products';	// live
	//var queryUrl = 'http://poodtestapi.aripaev.ee/api/products';  // dev
	var queryParams = {
		// '$select' : '*',
		'search' : search,
		'template' : 'Schooling',
	};
	queryUrl += '?' + $.param(queryParams);
	 //console.log(queryUrl);

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
		//console.log("got data");
		//console.log(data);
		currentCount = data.Products.length;
		//console.log(currentCount);

		if (currentCount === 0) {
			$('#trainings-table .loading').html('<p class="error">Koolitusi ei leitud!</p>');
			return;
		} else {
			$('#trainings-table .placeholder, #trainings-table .table-row, #trainings-table .table-footer').remove();
			$('#trainings-table .loading').fadeOut(100);
			// console.log('got:',dataCount);
		}

		trainingsList = [];

		$(data.Products).each(function(index) {
			var item = $(this)[0];
			//var date = ( new Date(item.EventStartDate) < new Date(item.EventEndDate) ) ? formatDate(item.EventStartDate)+' - '+formatDate(item.EventEndDate) : formatDate(item.EventStartDate);
			var date = ( new Date(item.EventStartDateTimeUtc) < new Date(item.EventEndDateTimeUtc) ) ?
				formatDate(item.EventStartDateTimeUtc)+' - '+formatDate(item.EventEndDateTimeUtc) :
				formatDate(item.EventStartDateTimeUtc);

			var firstName = '';
			var lastName = '';
			if (item.Persons.length > 0) {
				firstName = (item.Persons[0].FirstName) ? item.Persons[0].FirstName : item.Persons[0].Person.FirstName;
				lastName = (item.Persons[0].LastName) ? item.Persons[0].LastName : item.Persons[0].Person.LastName;
			}

			subtitle = (item.SubTitle !== null) ? item.SubTitle :'';

			var trainingRow = {
				Id: item.Id,
				date: date,
				startDate: new Date(item.EventStartDateTimeUtc),
				Name: item.Name,
				subtitle: subtitle,
				duration: item.EventPeriodInfo,
				trainer: firstName+' '+lastName,
				ShortDescription: item.ShortDescription,
			};

			trainingsList.push(trainingRow);
		});

		trainingsList.sort(sortTrainingsByDateAsc);
		showTrainings(trainingsList);

	});

}

function showTrainings(trainingsList) {
	$('#trainings-table .placeholder, #trainings-table .table-row, #trainings-table .table-footer').remove();

	$(trainingsList).each(function(index) {
		var item = $(this)[0];
		var category = '<div class="product-categories"> <span class="product-categories-title">KATEGOORIA: </span>';
		for(var count = 0; count < item.ProductCategories.length; count++) {
			category += item.ProductCategories[count] + ', ';
		}
		if (item.ProductCategories.length > 0) {
			category = category.substring(0, category.length-2);
		}
		category += '</div>';

		var template = '<div class="table-row table-row-open" id="table-row-'+item.Id+'" id-nr="'+item.Id+'">'+
			''+
				'<div class="table-cell date">'+item.date+'</div>'+
				'<div class="table-cell title"><h3>'+item.Name+'</h3><p>'+item.subtitle+'</p></div>'+
				'<div class="table-cell duration hidden-xs">'+ item.duration +'</div>'+
				'<div class="table-cell trainer hidden-xs">'+item.trainer+'</div>'+
				'<div class="table-cell more"><span class="text hidden-xs"></span>'+
				'<span class="ap-table-order hidden" id="ap-table-order-'+item.Id+'"></span><span class="ap-table-order-asc" id="ap-table-order-asc-'+item.Id+'"></span></div>'+
				'<div class="table-cell short-description hidden" id="short-description-'+item.Id+'">'+item.ShortDescription+
					category +
					'<div> <a class="button register" href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'#registreerimine" target="_blank">Registreeru</a>'+
					'<a class="button info" href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'" target="_blank">Lisainfo</a>'+
					'</div>' +
				'</div>'+
			''+
		'</div>';


		//<a href="http://pood.aripaev.ee/Product/ProductDetails?productId='+item.Id+'" target="_blank">
		//</a>

		$('#trainings-table .items').append(template);


	});

	// row click bind
	$('#trainings-table .table-row-open').click(function(e) {
			rowClick( $(this) );
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
		if ( $this.hasClass('asc') ) {
			loadTrainings(sort, 'asc', activeOffset);
			activeOrder = 'desc';
		}
		else {
			loadTrainings(sort, 'desc', activeOffset);
			activeOrder = 'asc';
		}

		$this.addClass('active').siblings().removeClass('active');
		$this.siblings().addClass('passive');
		$this.toggleClass('asc');
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
		if (dataLoaded == "loadTrainings") {
			refreshTrainings('EventStartDate', $(this), activeOffset);
			activeSort = 'EventStartDate';
		}
		else {
			if ( $(this).hasClass('asc') ) {
				trainingsList.sort(sortTrainingsByDateAsc);
				showTrainings(trainingsList);
			}
			else {
				trainingsList.sort(sortTrainingsByDateDesc);
				showTrainings(trainingsList);
			}
			$(this).toggleClass('asc');

			if ( !$(this).hasClass('active') ) {
				$(this).addClass('active').siblings().removeClass('active');
				$(this).siblings().addClass('passive');
			}
		}
	});

	$('#trainings-table .table-cell.title').click(function() {
		if (dataLoaded == "loadTrainings") {
			refreshTrainings('Name', $(this), activeOffset);
			activeSort = 'Name';
		}
		else {
			if ( $(this).hasClass('asc') ) {
				trainingsList.sort(sortTrainingsByNameAsc);
				showTrainings(trainingsList);
			}
			else {
				trainingsList.sort(sortTrainingsByNameDesc);
				showTrainings(trainingsList);
			}
			$(this).toggleClass('asc');

			if ( !$(this).hasClass('active') ) {
				$(this).addClass('active').siblings().removeClass('active');
				$(this).siblings().addClass('passive');
			}
		}
	});

	/*$('#trainings-table .table-cell.duration').click(function() {
		if (dataLoaded == "loadTrainings") {
			refreshTrainings('AdditionalDescription', $(this), activeOffset);
			activeSort = 'AdditionalDescription';
		}
		else {
		//	if ( $(this).hasClass('asc') ) {
		//		trainingsList.sort(sortTrainingsByDurationAsc);
		//		showTrainings(trainingsList);
		//	}
		//	else {
		//		trainingsList.sort(sortTrainingsByDurationDesc);
		//		showTrainings(trainingsList);
		//	}
		//	$(this).toggleClass('asc');

		//if ( !$(this).hasClass('active') ) {
		//	$(this).addClass('active').siblings().removeClass('active');
		//	$(this).siblings().addClass('passive');
		//}
		}
	});*/

	/*$('#trainings-table .table-cell.trainer').click(function() {
		refreshTrainings('ProductPersons/Person/LastName', $(this));
	});*/

}

$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}
$("#site-search").enterKey(function () {

		searchTrainings($("#site-search").val());

})
$('.btn-site-search-span').click(function() {
		searchTrainings($("#site-search").val());
});

if ( $('#trainer-footer').length > 0 ){
	$( "#trainer-footer" ).html( $( "#footer-text" ).html() );
	$( "#footer-text" ).html( '' );
}


/*** TRAINERS - UPCOMING ***/
if ( $('.upcoming').length > 0 ) {
	var eventItem = $('.upcoming .event'),
		total = eventItem.length,
		margin = 0,
		first = 1;

//	if ( viewportWidth > 768 )
//		eventItem.width( ($('.upcoming').width() - 30) / 2 );

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

/*
var sendsmaily = {
	getInfo: function(email, subdomain) {
		var object = this;
		var info = '';
		return new Promise(function(resolve, reject) {
			$.ajax({
				method: 'GET',
				url: '/newsletter-sendsmaily?domain='+subdomain+'&action=info&email='+email
			}).success(function(data) {
				data = object.cleanResult(data);
				if(typeof data.code === "undefined") {
					for (var key in data) {
						if (data.hasOwnProperty(key)) {
							if (key == 'email') {
								info += '"previous_email":"'+data[key]+'",';
							} else {
								info += '"'+key+'":"'+data[key]+'",';
							}
						}
					}
				} else {
                    info = false;
                }
				resolve(info);
			}).fail(function(data) {
				data = object.cleanResult(data);
				reject(data);
			});
		});
	},

    editSingleUser: function (email, subdomain, options) {
        var object = this;
        return new Promise(function(resolve, reject) {
            $.ajax({
                method: 'GET',
                url: '/newsletter-sendsmaily?domain=' + subdomain + '&action=edit&email=' + email + '&info=' + encodeURIComponent(options)
            }).success(function(data) {
                data = object.cleanResult(data);
                resolve(data);
            }).fail(function(data) {
            	data = object.cleanResult(data);
                reject(data);
            });
        });
    },

	cleanResult: function(data) {

		var tryData;
	    try {
	        tryData = JSON.parse(data);
	    } catch(e) {
	        tryData = data;
	    }
		return tryData;
	}
}
*/

/*** NEWSLETTER ***/
$('.menu-newsletter').click(function(e) {
  e.preventDefault();
  $("#modal-newsletter").modal('show');
});
$('#newsletter-unsubscribe').click(function(e) {
  e.preventDefault();
  newsletter.unsubscribe();
});
$('#newsletter-edit').click(function(e) {
  e.preventDefault();

  var emailOld = $('#newsletter-email-old').val();
  var emailNew = $('#newsletter-email').val();

  if (emailNew.length === 0) {
    $('.newsletter-error').html('Palun sisestage e-posti aadress!').show();
  } else {
    newsletter.edit(emailOld, emailNew);
  }
});

$(function() {
  if (getUrlParameter('newsletter')) {
    $("#modal-newsletter").modal('show');
  }
});

$(document).on('submit', 'form#send-newsletter', function(e){
  e.preventDefault();
  newsletter.subscribe();
});

var newsletter = {
  subscribe: function() {
    var object = this;
    var signupName = $.trim($("#newsletter-name").val());
    var signupEmail = $("#newsletter-email").val();
    var signupSubdomain = $('#send-newsletter').data('subdomain');
    var errorField = $("#newsletter-error").empty();
    var loading = $("#modal-newsletter .loading, #modal-newsletter .loading-overlay");

    if (signupEmail.length === 0) {
      errorField.text('Palun sisestage e-posti aadress!');
      return false;
    } else {
      loading.show();
    }

    $.ajax({
        method: 'GET',
        url: '/newsletter-sendsmaily/?dom='+signupSubdomain+'&eml='+signupEmail+'&nme='+encodeURIComponent(signupName)
    }).done(function(data) {
        data = object.cleanResult(data);

        if (data.code === 101) {
          var $modal = $('#modal-newsletter');

          $modal.find('.modal_thanks_email').html('<a href="mailto:' + signupEmail + '">' + signupEmail + '</a>');
          $modal.find('.modal_intro, .form--newsletter').hide();
          $modal.find('.modal_thanks').show();
        } else {
          errorField.text(object.parseError(data));
        }
    }).fail(function(data) {
        errorField.html(object.parseError(data));
    }).always(function() {
        loading.hide();
    });
  },

  edit: function(oldEmail, newEmail) {
    var campaign = getUrlParameter('campaign');
    var oldName = encodeURIComponent($('#newsletter-name-old').val());
    var newName = encodeURIComponent($('#newsletter-name').val());
    var object = this;

    object.getInfo(oldEmail).then(function(response) {
      var didChangeEmail = (oldEmail != newEmail) ? true : false;
      var apiAct = (didChangeEmail) ? 'resub' : 'edit';

      //console.log(response);

      // sub-r-change
      $.ajax({
        method: 'GET',
        url: '/newsletter-sendsmaily?dom=apakadeemia&act='+apiAct+'&eml='+newEmail+'&nme='+newName+'&inf='+encodeURIComponent(response)
      }).success(function(data) {
        data = object.cleanResult(data);
        //console.log(data);
        if (data.code == 101) {

          if (didChangeEmail) {
            // unsub
            $.ajax({
              method: 'GET',
              url: '/newsletter-sendsmaily?dom=apakadeemia&act=remove&eml='+oldEmail+'&camp='+campaign
            }).success(function(data) {
              data = object.cleanResult(data);
              if (data.code == 101) {
                $('.newsletter-page-hide').hide();
                $('#newsletter-response').show();
              } else {
                $('.newsletter-error').text(object.parseError(data)).fadeIn(200);
              }
            }).fail(function(data) {
              alert('AJAX error: ' + data);
            });
          } else {
			  $('.newsletter-page-hide').hide();
			  $('#newsletter-response').show();
            console.log('name changed');
          }

        } else {
          $('.newsletter-error').text(object.parseError(data)).fadeIn(200);
        }
      }).fail(function(data) {
        alert('AJAX error: ' + data);
      }).always(function() {
        $('body').removeClass('loading');
        $('#newsletter-subscribe').prop('disabled', false);
      });
    });
  },

  unsubscribe: function(email, campaign) {
    var campaign = campaign || getUrlParameter("campaign");
    var email = email || getUrlParameter("email");
    var object = this;
    var errorMessage;

    $('body').addClass('loading');
    $('#newsletter-subscribe').prop('disabled', 'disabled');

    $.ajax({
      method: 'GET',
      url: '/newsletter-sendsmaily?dom=apakadeemia&act=remove&eml='+email+'&camp='+campaign
    }).success(function(data) {
      data = object.cleanResult(data);

      console.log(data);

      if (data.code == 101) {
        var signupEmail;
        thankYouHTML = '<p>Kontakt <a href="mailto:' + email + '">' + email + '</a> on uudiskirja saajate hulgast eemaldatud!</p>'+
        '<p>Oled alati oodatud uudiskirjaga uuesti liituma. Uudiskirja saad tellida <a href="/liitu-uudiskirjaga">siit</a>.</p>';
        $('.newsletter-page-hide').hide();
        $('#newsletter-response').html(thankYouHTML).show();
      } else {
        $('.newsletter-error').text(object.parseError(data)).fadeIn(200);
      }
    }).fail(function(data) {
      alert('AJAX error: ' + data);
    }).always(function() {
      $('body').removeClass('loading');
      $('#newsletter-subscribe').prop('disabled', false);
    });
  },

  validate: function() {
    var object = this;
    var email = getUrlParameter("email");

    $.ajax({
      method: 'GET',
      url: '/newsletter-sendsmaily?dom=apakadeemia&act=info&eml='+email
    }).success(function(data) {
      data = object.cleanResult(data);

      console.log(data);

      if (data.code === 207) {
        $('#newsletter-response').html("Andmeid muuta ning uudiskirjast loobuda saab ainult läbi saadetud uudiskirja.").show();
      } else if (data.code) {
        $('#newsletter-response').html( object.parseError(data) ).show();
      } else if (data.is_unsubscribed == 1) {
        $('#newsletter-response').html('<p><a href="mailto:'+email+'">'+email+'</a> on uudiskirjast juba loobunud!</p>').show();
      } else {
        if(data.email) {
          $('#newsletter-email, #newsletter-email-old').val(data.email);
        }
        if(data.name) {
          $('#newsletter-name, #newsletter-name-old').val(data.name);
        }

        $('.newsletter-page-hide').show();
      }

      // got data, enable form
      $('form input[type="submit"]').prop('disabled', false);
    }).fail(function(data) {
      console.log(cleanResult(data));
      $('#newsletter-response').text("Andmeid muuta ning uudiskirjast loobuda saab ainult läbi saadetud uudiskirja").fadeIn(200);
    }).always(function() {
      $('.loader-inline').hide();
    });
  },

  getInfo: function(email) {
    var object = this;
    var info = '';

    return new Promise(function(resolve, reject) {
      jQuery.ajax({
        method: 'GET',
        url: '/newsletter-sendsmaily?dom=apakadeemia&act=info&eml='+email
      }).success(function(data) {
        data = object.cleanResult(data);
        if(typeof data.code === "undefined") {
          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              if (key == 'email') {
                info += '"previous_email":"'+data[key]+'",';
              } else {
                info += '"'+key+'":"'+data[key]+'",';
              }
            }
          }
        } else {
          info = false;
        }
        console.log('i', info);
        resolve(info);
      }).fail(function(data) {
        data = object.cleanResult(data);
        reject(data);
      });
    });
  },

  parseError: function(data) {
    var errorMessage = '';

    switch(data.code) {
      case 203:
        errorMessage = 'Vigased andmed.';
        break;
      case 204:
        errorMessage = 'E-posti aadress on vigane.';
        break;
      case 206:
        errorMessage = 'Sellist e-posti ei leitud!';
        break;
      case 207:
        errorMessage = 'Palun sisestage e-posti aadress.';
        break;
      default:
        errorMessage = data.message;
    }

    return errorMessage;
  },

  cleanResult: function(data) {
    var tryData;
      try {
          tryData = JSON.parse(data);
      } catch(e) {
          tryData = data;
      }
    return tryData;
  }
}

$(document).on('submit', 'form#send-mail', function(e){
  e.preventDefault();
  sendMail.subscribe();
});

var sendMail = {
	subscribe: function() {
    var object = this;
    //var signupName = $.trim($("#newsletter-name").val());
    var signupEmail = $("#sendmail-email").val();
    //var signupSubdomain = $('#send-newsletter').data('subdomain');
    var errorField = $("#sendmail-error").empty();
    //var loading = $("#modal-newsletter .loading, #modal-newsletter .loading-overlay");

    if (signupEmail.length === 0) {
      errorField.text('Palun sisestage e-posti aadress!');
      return false;
    } else {
      //loading.show();
    }

    $.ajax({
        method: 'GET',
        url: '/sendm/?email='+signupEmail
    }).done(function(data) {
      //  data = object.cleanResult(data);

      //  if (data.code === 101) {
      //    var $modal = $('#modal-newsletter');

          //$modal.find('.modal_thanks_email').html('<a href="mailto:' + signupEmail + '">' + signupEmail + '</a>');
      //    $modal.find('.form--sendMail').hide();
      //    $modal.find('.sendmail_thanks').show();
      //  } else {
          //errorField.text(object.parseError(data));
      //  }

				var $block = $('#trainer-sendMail');

				//$modal.find('.modal_thanks_email').html('<a href="mailto:' + signupEmail + '">' + signupEmail + '</a>');
				$block.find('.sendmail_intro, .form--sendMail').hide();
				$block.find('.sendmail_thanks').show();

    }).fail(function(data) {
        errorField.html(object.parseError(data));
    }).always(function() {
        //loading.hide();
    });
  },
}

// Reset modal
$('#modal-newsletter').on('hidden.bs.modal', function(e) {
  var $modal = $(this);

  $modal.find('input[type="text"]').val('');
  $modal.find('.modal_intro, .form--newsletter').show();
  $modal.find('.modal_thanks').hide();
  $('#newsletter-error').html('');

  // Remove ?newsletter=signup
  window.history.replaceState({}, document.title, "/");
});

function getUrlParameter(param) {
  if (window.location.href.indexOf("?") <= -1) {
    return "";
  }
    var pageParam = decodeURIComponent(window.location.search.substring(1)),
        keyValues = pageParam.split('&'),
        paramName,
        i;

    for (i = 0; i < keyValues.length; i++) {
        paramName = keyValues[i].split('=');

        if (paramName[0] === param) {
            return paramName[1] === undefined ? "" : paramName[1];
        }
    }
    return "";
}
