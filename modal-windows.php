<div id="modal-newsletter" role="dialog" tabindex="-1" class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <!--<span class="modal__envelope"></span>-->
        <h2 class="modal_heading">Liitu Äripäeva Akadeemia uudiskirjaga!</h2>
        <p class="modal_content">
          <span class="modal_intro">Äripäeva Akadeemia uudiskiri toob Sinuni ülevaate kasulikest artiklitest ning koolitajate soovitustest, mis muudavad igapäevatöö lihtsamaks ja toetavad Sind isiklikul arengul.</span>
          <span class="modal_thanks">
            Täname, et tellisid Äripäeva Akadeemia uudiskirja!<br><br>
            Saatsime Sinu e-posti aadressile <span class="modal_thanks_email"></span> liitumise kinnituskirja.
            Kui kinnituskiri pole Sinuni jõudnud, kontrolli, kas sisestasite aadressi õigesti.<br><br>
            Küsimuste korral võtke ühendust <a href="mailto:akadeemia@aripaev.ee">akadeemia@aripaev.ee</a><br><br>
            <span class="small-reminder">Tellitud uudiskirjast saad loobuda iga saadetud uudiskirjaga.</span>
          </span>
        </p>
        <form class="form--newsletter" method="post" id="send-newsletter" data-subdomain="apakadeemia">
          <input type="hidden" value="" name="secretkey">
          <input id="newsletter-email" type="text" class="input" placeholder="E-post" name="newsletter-email">
          <hr class="modal-window-hr">
          <input id="newsletter-name" type="text" class="input" placeholder="Nimi" name="newsletter-name">
          <div id="newsletter-error" class="error"></div>
          <input class="button button--sm" type="submit" value="LIITU UUDISKIRJAGA" name="Submit">
        </form>
        <div class="loading-overlay">
          <div class="spinner"></div>
        </div>
        <div class="modal-close" data-dismiss="modal"></div>
      </div>
    </div>
  </div>
</div>
