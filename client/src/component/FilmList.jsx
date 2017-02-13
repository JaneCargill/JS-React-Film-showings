var React = require('react');
var Film = require('./Film');

var FilmList = React.createClass({
  render: function() {

    var commentNodes = this.props.data.map(function(film) {
      return (
        <Film>
        <a href={film.about}>{film.title} </a>
        <a className="showtime" href={film.link}>{film.showtime} </a>
       </Film>
        );
    });

    return (
      <div className="filmlist">
        {commentNodes}
      </div>
      );
  }
});

module.exports = FilmList;