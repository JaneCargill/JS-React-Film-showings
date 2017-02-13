var React = require('react');
var ReactDOM = require('react-dom');
var FilmBox = require('./component/FilmBox')

window.onload = function(){
  ReactDOM.render(
    <FilmBox/>,
    document.getElementById('app')
  );
}
