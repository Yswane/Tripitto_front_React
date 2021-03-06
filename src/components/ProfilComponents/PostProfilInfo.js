import React from 'react'
import './PostProfilInfo.css'
import { NavLink } from 'react-router-dom'
import UploadImgProfil from '../../components/ProfilComponents/UploadImgProfil.js';



const PostProfilInfo = (props) => {
  return (
    <div className="bloc-page-profil">
      <div className='position-bloc'>
        <div className='profil-menu'>
          <ul>
            <li>
              <NavLink
                className="nav"
                to="/Profil" exact>Profil</NavLink>
            </li>

            <li>
              <NavLink to='/Video'>Video</NavLink>
            </li>

            <li>
              <NavLink
                to="/Abonnements" exact >Abonnements</NavLink>
            </li>
            <li>
              <NavLink
                to="/Abonnés" exact >Abonnés</NavLink>
            </li>
            <li>
              <NavLink
                to="/Notifications" exact >Notifications</NavLink>
            </li>
            <li>
              <NavLink
                to="/Security" exact >Sécurité</NavLink>
            </li>
            <li>
              Mettre à niveau
            </li>
          </ul>

        </div>

        <form className="grid-profil-info">
          <div>
            <h2>Profil</h2>
            <div className='field-profil-picture-bloc'>

              <input type="text" className="input_picture_profil" placeholder="Url de l'avatar" name="profile_picture" value={props.profile_picture} onChange={props.changeHandler} />
              <div className="position_avatar_profil">
                <UploadImgProfil />
              </div>
            </div>
          </div>
          <div className="profil-bloc-2">
            <div>
              <label htmlFor="pseudo">Nom complet ou pseudo</label>
              <input type="text" name="pseudo" value={props.pseudo} onChange={props.changeHandler} placeholder='Aventurier du Dimanche' className='field-profil-bloc-2' />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" value={props.location} onChange={props.changeHandler} placeholder="Ou l'endroit ou nous avons le plus de chance de vous croisé" className="field-profil-bloc-2" />
            </div>
            <div>
              <label htmlFor="profil_link">Lien de votre profil tripitto</label>
              <span><p className="link-tripitto-p">Utilisez votre pseudo pour partagez votre profil plus facilement</p></span>
              <input type="text" name="profil_link" value={props.profil_link} onChange={props.changeHandler} placeholder='tripitto.com//aventurierdudimanche' className='field-profil-bloc-2' />
            </div>
          </div>
          <div className="profil-bloc-3">
            <div className='field-profil-checkbox'>
              <label htmlFor="identity" className="field-title-identity">Identité</label>
              <div className="identity-field">
                <input type="checkbox" id="lui" name="is_checked_him" value={props.identity} checked={props.is_checked_him} onChange={props.handleCheckbox} className="field-profil-checkbox" />
                <label htmlFor="lui">Lui</label>
                <input type="checkbox" id="elle" name="is_checked_her" value={props.identity} checked={props.is_checked_her} onChange={props.handleCheckbox} />
                <label htmlFor="elle">Elle</label>
                <input type="checkbox" id="equipe" name="is_checked_team" value={props.identity} checked={props.is_checked_team} onChange={props.handleCheckbox} />
                <label htmlFor="equipe">Equipe</label>
              </div>
            </div>
            <div>
              <label htmlFor="birth_date">Date de naissance</label>
              <input type="date" min="1990-01-01" max="2050-01-01" name="birth_date" value={props.birth_date} onChange={props.changeHandler} />
              {/* <input type="text" name="birth_date" value={props.birth_date} onChange={props.changeHandler} placeholder='1997/02/02' className='field-profil-bloc-3' /> */}
            </div>
            <div>
              <label htmlFor="nb_contries_visited">Nombre de pays visités</label>
              <input type="text" name="nb_countries_visited" value={props.nb_countries_visited} onChange={props.changeHandler} placeholder='Combien ?' className='field-profil-bloc-3' />
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}


export default PostProfilInfo
