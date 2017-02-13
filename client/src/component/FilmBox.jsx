var React = require('react');
var FilmList = require('./FilmList')

var films = [
{id:1, title: 'John Wick Chapter 2', showtime: 'showtime', about: 'http://www.imdb.com/title/tt4425200/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0', link: 'http://www.imdb.com/showtimes/title/tt4425200?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0P67S8NWCEZ0XN3TERVA&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs'},
{id:2, title: 'Hidden Figures', about: 'http://www.imdb.com/title/tt4846340/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1', showtime: 'showtime', link: 'http://www.imdb.com/showtimes/title/tt4846340?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0P67S8NWCEZ0XN3TERVA&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs'},
{id:3, title: 'Moonlight', about: 'http://www.imdb.com/title/tt4975722/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2', showtime: 'showtime', link: 'http://www.imdb.com/showtimes/title/tt4975722?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0P67S8NWCEZ0XN3TERVA&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs'},
{id:4, title: 'La La Land', about: 'http://www.imdb.com/title/tt3783958/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t2', showtime: 'showtime', link: 'http://www.imdb.com/showtimes/title/tt3783958?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'},
{id:5, title: 'Split', about: 'http://www.imdb.com/title/tt4972582/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_t3', showtime: 'showtime', link: 'http://www.imdb.com/showtimes/title/tt4972582?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2417984102&pf_rd_r=1HTA43SJHJHPNNVJ19G9&pf_rd_s=right-6&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_cht_gs'}
];

var FilmBox = React.createClass({
  getInitialState: function() {
    return {data: films};
  },
  render: function() {
    return (
      <div className="filmbox">
      <h3>Film's Now Showing</h3>
        <FilmList data={this.state.data}/>
      </div>
      );
  }
});

module.exports = FilmBox;