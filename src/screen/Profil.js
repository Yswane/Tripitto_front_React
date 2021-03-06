import React, { Component } from 'react';
import jwt from 'jsonwebtoken'
import AutoriseContact from '../components/ProfilComponents/AutoriseContact'
import PostProfilInfo from '../components/ProfilComponents/PostProfilInfo'
import PostEnumProfil from '../components/ProfilComponents/PostEnumProfil';
import PostBioProfil from '../components/ProfilComponents/PostBioProfil';
import PostIngedients from '../components/ProfilComponents/PostIngedients';
import Socialprofil from '../components/ProfilComponents/Socialprofil';
import UserLastnameFirstname from '../components/ProfilComponents/UserLastnameFirstname';

import "./Profil.scss"
import "../components/ProfilComponents/PostProfilInfo.css"
import axios from "axios"


class Profil extends Component {
  state = {
  }





  submitHandler = e => {
    e.preventDefault()
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/profil/update_profil'
    if (process.env.NODE_ENV === 'production') {
        pathApi = process.env.REACT_APP_PATH_API_PROD + '/profil/update_profil'
    }
    //Permet de récupérer l'id de l'utilisateur connecté
    const token = localStorage.getItem('token')
    const tokenDecoded = jwt.decode(token)
    const idProfilDecoded = tokenDecoded.id_profil
    //requete put
    axios.put(`${pathApi}/${idProfilDecoded}`, this.state)
      .then(response => {
        console.log(response)
      })
      .then(
        //Pour que  button submit renvoie vers la page ProfilDescription
        this.props.history.push("/ProfilDescription"),
        window.location.reload(true)
      )
      .catch(error => {
        console.log(error)
      })
  }






  handleCheckbox = (e) => {
    e.preventDefault()
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }
  //les Enumes de la table profile.//
  profil1 = () => {
    this.setState({ profil: 1 })
  }
  profil2 = () => {
    this.setState({ profil: 2 })
  }
  profil3 = () => {
    this.setState({ profil: 3 })
  }
  profil4 = () => {
    this.setState({ profil: 4 })
  }
  profil5 = () => {
    this.setState({ profil: 5 })
  }


  //les Enumes ingredients//
  Enum1 = () => {
    this.setState({ ingredients: 1 })
  }
  Enum2 = () => {
    this.setState({ ingredients: 2 })
  }
  Enum3 = () => {
    this.setState({ ingredients: 3 })
  }
  Enum4 = () => {
    this.setState({ ingredients: 4 })
  }
  Enum5 = () => {
    this.setState({ ingredients: 5 })
  }
  Enum6 = () => {
    this.setState({ ingredients: 6 })
  }
  Enum7 = () => {
    this.setState({ ingredients: 7 })
  }
  Enum8 = () => {
    this.setState({ ingredients: 8 })
  }
  Enum9 = () => {
    this.setState({ ingredients: 9 })
  }
  Enum10 = () => {
    this.setState({ ingredients: 10 })
  }
  Enum11 = () => {
    this.setState({ ingredients: 11 })
  }


  Enum12 = () => {
    this.setState({ ingredients: 12 })
  }
  Enum13 = () => {
    this.setState({ ingredients: 13 })
  }
  Enum14 = () => {
    this.setState({ ingredients: 14 })
  }
  Enum15 = () => {
    this.setState({ ingredients: 15 })
  }
  Enum16 = () => {
    this.setState({ ingredients: 16 })
  }
  Enum17 = () => {
    this.setState({ ingredients: 17 })
  }
  Enum18 = () => {
    this.setState({ ingredients: 18 })
  }
  Enum19 = () => {
    this.setState({ ingredients: 19 })
  }
  Enum20 = () => {
    this.setState({ ingredients: 20 })
  }
  Enum21 = () => {
    this.setState({ ingredients: 21 })
  }



  render() {
    return (
      <div className="pageprofil" >

        <UserLastnameFirstname />

        <form onSubmit={this.submitHandler}>
          <PostProfilInfo
            {...this.state}
            getNameUser={this.getNameUser}
            handleCheckbox={this.handleCheckbox}
            changeHandler={this.changeHandler}

          />

          <PostEnumProfil
            {...this.state}
            profil1={this.profil1}
            profil2={this.profil2}
            profil3={this.profil3}
            profil4={this.profil4}
            profil5={this.profil5}
            changeHandler={this.changeHandler}
          />

          <PostBioProfil
            {...this.state}
            changeHandler={this.changeHandler}
          />

          <PostIngedients
            {...this.state}
            Enum1={this.Enum1}
            Enum2={this.Enum2}
            Enum3={this.Enum3}
            Enum4={this.Enum4}
            Enum5={this.Enum5}
            Enum6={this.Enum6}
            Enum7={this.Enum7}
            Enum8={this.Enum8}
            Enum9={this.Enum9}
            Enum10={this.Enum10}
            Enum11={this.Enum11}
            Enum12={this.Enum12}
            Enum13={this.Enum13}
            Enum14={this.Enum14}
            Enum15={this.Enum15}
            Enum16={this.Enum17}
            Enum18={this.Enum18}
            Enum19={this.Enum19}
            Enum20={this.Enum20}
            Enum21={this.Enum21}
            Enum22={this.Enum22}
            changeHandler={this.changeHandler}
          />

          <AutoriseContact
            {...this.state}
            handleCheckbox={this.handleCheckbox}
          />
          <Socialprofil
            {...this.state}
            changeHandler={this.changeHandler}
          />

          <div className="save-btn">
            <button type="submit" >SAUVEGARDER</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Profil;