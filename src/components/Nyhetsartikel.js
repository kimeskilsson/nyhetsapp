import React from 'react';
import Nyhetslista from './Nyhetslista';

function Nyhetsartikel(props) {
  return(<article>
    <img src={props.minArtikel.urlToImage}></img>
    <h2> {props.minArtikel.title}</h2>
    <p> {props.minArtikel.description}</p>
    <a> läs mer...</a>
    </article>);
}

export default Nyhetsartikel;