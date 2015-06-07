var Layout = React.createClass({
	render: function(){
		return (
      <div is="u-slide" split="down" scroll="0" snap="1" height="100%" width="100%" id="top">
  			<div is="u-slide" beta="100" id="logo" className="flex-center bg section">BRICK</div>
  			<div is="u-slide" beta="100" split="right" scroll="0" snap="1" id="bot" className="light">
    		<div is="u-slide" beta="100" id="first" className="section bg flex-center">FIRST</div>
    		<div is="u-slide" beta="100" id="second" className="section bg flex-center">SECOND</div>
    		<div is="u-slide" beta="100" id="third" className="section bg flex-center">THIRD</div>
    		<div is="u-slide" beta="100" id="fourth" className="section bg flex-center">FOURTH</div>
      </div>
    );
	}
})





React.render(<Layout/>,document.getElementById('body'));