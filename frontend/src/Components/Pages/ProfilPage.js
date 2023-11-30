import { clearPage } from '../../utils/render';
import image from '../../img/4882404-removebg-preview.png'
import '../../stylesheets/card.css';
import '../../stylesheets/profil.css';




const ProfilPage = () => {
    clearPage();
    const profilPage = document.querySelector('main');
    profilPage.innerHTML = `

    
    <section class="profil-container">

      <section class="profil">
        <div class="profil-top">

            <div class="pdp">
              <img src="${image}" alt="PhotoDeProfil">
            </div>

            <div class="username d-flex justify-content-center align-items-center flex-column">
              <h3>zkAli</h3>
              <h6>Ali Zekhnini</h6>
            </div>

            <div class="link-profil d-flex justify-content-center align-items-center w-50">
              <a class="nav-link" href="#" alt="RENVOIE DANS UN CHAT AVEC"><i class='bi bi-chat'></i>Discuter</a>
              <a class="nav-link" href="#" alt="S'ABBONER"><i class='bi bi-'></i>S'abonner</a>
            </div>

        </div>
      </section>

      <hr class="w-75 mx-auto">


      <!-- PARTIE CARD POUR LES SYNTHESES -->

      <section class="profil-synthese d-flex justify-content-center align-items-center">

        <div class="mesSyntheses-container">

          <h5>Mes Sytnhèses</h5>
          <div class="mesSyntheses">

              <div class="card-container row row-cols-1 row-cols-md-2 row-cols-lg-4">

                  <div class="card card-profil col">

                  <h5 class="card-title text-center mt-2"><a href="/" alt="LIEN POUR SYNTHESE" >Semaine For</a></h5>

                      <a href="/">                
                          <div class="img img-profil mt-0">
                              <img src="${image}" class="card-img-top" alt="...">
                          </div>
                      </a>

                      <div class="card-body">   
                              <p class="card-text"><a href="/" alt="LIEN VERS UTILISATEUR">Publié par : user_158745</a></p>
                      </div>

                  </div>    

              </div>

              <div class="card-container row row-cols-1 row-cols-md-2 row-cols-lg-4">

                  <div class="card card-profil col">

                  <h5 class="card-title text-center mt-2"><a href="/" alt="LIEN POUR SYNTHESE" >Semaine For</a></h5>

                      <a href="/">                
                          <div class="img img-profil mt-0">
                              <img src="${image}" class="card-img-top" alt="...">
                          </div>
                      </a>

                      <div class="card-body">   
                              <p class="card-text"><a href="/" alt="LIEN VERS UTILISATEUR">Publié par : user_158745</a></p>
                      </div>

                  </div>    

              </div>

              <div class="card-container row row-cols-1 row-cols-md-2 row-cols-lg-4">

                  <div class="card card-profil col">

                  <h5 class="card-title text-center mt-2"><a href="/" alt="LIEN POUR SYNTHESE" >Semaine For</a></h5>

                      <a href="/">                
                          <div class="img img-profil mt-0">
                              <img src="${image}" class="card-img-top" alt="...">
                          </div>
                      </a>

                      <div class="card-body">   
                              <p class="card-text"><a href="/" alt="LIEN VERS UTILISATEUR">Publié par : user_158745</a></p>
                      </div>

                  </div>    

              </div>

              <div class="card-container row row-cols-1 row-cols-md-2 row-cols-lg-4">

                  <div class="card card-profil col">

                  <h5 class="card-title text-center mt-2"><a href="/" alt="LIEN POUR SYNTHESE" >Semaine For</a></h5>

                      <a href="/">                
                          <div class="img img-profil mt-0">
                              <img src="${image}" class="card-img-top" alt="...">
                          </div>
                      </a>

                      <div class="card-body">   
                              <p class="card-text"><a href="/" alt="LIEN VERS UTILISATEUR">Publié par : user_158745</a></p>
                      </div>

                  </div>    

              </div>


          </div>


        </div 

        
      </section>

    </section>
    
    `
}

export default ProfilPage;