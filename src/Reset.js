import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color:#FAFAFB;
    font-family: 'SF Pro Display', sans-serif;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*MY MODIFICATIONS*/
*{
    box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
button{
    border: none;
}
input:focus{
    outline: none;
}
.headCont{
	width:100%;
	display:flex;
	flex-direction:column;
	background: linear-gradient(to bottom, #740094, #d7baf2);
	justify-content:space-between;
	align-items:center;
	padding-block:15px;
	padding-inline:5%;
	img{
		width:20%;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
		@media (max-width: 800px) {width:60%;}
	}
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:35px;
		color:#fd3dab;
		padding-block:10px;
		width:80%;
		@media (max-width: 800px) {font-size:20px; line-height:22px;}
	}
	button{
		width:28%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 20px;
		text-align: center;
		line-height:22px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		padding-block:10px;
		background-color: #fd3dab;
		cursor:pointer;
		@media (max-width: 800px) {
			width:90%; font-size:20px; line-height:22px;
		}
	}

}
.video-responsive{
	width:100%;
	display:flex;
	justify-content:center;
}
.fourthCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #00dfc8, #d7baf2);
	justify-content:space-between;
	align-items:center;
	padding:8%;
	img{
		width:35%;

	border-radius:50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}

}
.icon{
	margin-right:8px;
	margin-bottom:-5px;
}
.prints{
	background:#d7baf2;
	padding-inline:5%;
	display:flex;
	flex-direction:column;
	align-items:center;
	button{
		width:30%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 20px;
		text-align: center;
		line-height:22px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-bottom:35px;
		padding-block:10px;
		background-color: #fd3dab;
		cursor:pointer;
		@media (max-width: 800px) {
			width:90%; font-size:20px; line-height:22px;
		}
	}
	h1{
		font-family: 'Montserrat';
		font-weight: 700;
		font-size: 40px;
		line-height: 40px;
		text-align:center;
		color:black;
		padding-top:40px;
		@media (max-width: 800px) {font-size:25px; line-height:27px;}
	}
}
.bonusbox{
	display:flex;
	justify-content:center;
	padding-block:0px;
	flex-wrap:wrap;
	padding-inline:5%;
	@media (max-width: 800px) {display:block; padding-block:0;}
	h1{
		font-family: 'Montserrat';
		font-weight: 700;
		font-size: 40px;
		line-height: 40px;
		text-align:center;
		color:white;
		padding-top:40px;
		display:block;
	}
}
.oferta{
display:flex;
flex-direction:column;
align-items:center;
padding-block:20px;
background: linear-gradient(to bottom, #740094, black);

@media (max-width: 800px) {padding-inline:5%;}
h1{
	font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:white;
		padding-block:20px;
		margin-bottom:30px;

@media (max-width: 800px) {font-size:22px; line-height:25px;}
}
}
.offertbox{
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 800px) {display:block;}

}
.offertcard{
	width:38%;
	background: linear-gradient(to bottom, #00a1d7, #004c7f);
box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
padding:20px;
border-radius:40px;
margin-inline:80px;
height:360px;
display:flex;
flex-direction:column;
justify-content: space-around;
@media (max-width: 800px) {width:100%; margin-inline:0; margin-bottom:30px;}
h2{
	font-family:'Montserrat';
		font-weight: 700;
		font-size: 20px;
		text-align: center;
		line-height:45px;
		color:white;
		
@media (max-width: 800px) {font-size:22px; line-height:25px;}
}
p{
	font-family:'Montserrat';
		font-weight: 500;
		font-size: 15px;
		line-height:25px;
		color:white;

@media (max-width: 800px) {font-size:18px; line-height:20px;}
}
}
.wppButton{
	position: fixed;
	bottom: 40px;
	right: 40px;
	width:100px;
	height:100px;
	border-radius:50px;
	text-align:center;
	background-color: #00C74C;
	cursor:pointer;
	z-index:5;
	transition: all 0.1s linear;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	&:hover{
		opacity: 0.9;
		margin-bottom: 10px;
	}
	@media (max-width: 800px) {
   width:75px;
   height:75px;
   *{font-size:35px;}
}
}
.offertbutton{
	width:30%;
	background: linear-gradient(to bottom, #ffbd59, #FFA93F);
box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
border-radius:40px;
margin-inline:10px;
margin-block:60px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:30px;

@media (max-width: 800px) {width:100%; margin-block:30px; margin-inline:0;}
h3{
	font-family:'Montserrat';
		font-weight: 600;
		font-size: 22px;
		text-align: center;
		line-height:25px;
		color:black;
		margin-bottom:20px;

@media (max-width: 800px) {font-size:20px; line-height:22px;}
}
button{
	width:80%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:30px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:pointer;

@media (max-width: 800px) {width:90%;font-size:22px; line-height:23px;}
}
}
.offertbuttonnew:hover{
	background-color: #FF6FC1;
}
.offertbuttonnew{
	transition: background-color 0.15s ease-in-out;
	width:30%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:30px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:pointer;
		margin-bottom:50px;
@media (max-width: 800px) {width:90%;font-size:22px; line-height:23px;}
}
.bonuscard{
	height:250px;
	display:flex;
	width:30%;
	border-radius:20px;
	align-items:center;
	background-color: #740094;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

	margin:auto;
	margin-block:20px;

@media (max-width: 800px) {width:100%; margin-bottom:40px;}
	img{
		height:100%;
	}
	p{

		font-family: 'Montserrat';
		font-weight: 400;
		font-size: 13px;
		line-height: 15px;
		color:white;
		padding:15px;

@media (max-width: 800px) {font-size:13px; line-height:15px;}

	}


}
.sectiona{
	display:flex;
	justify-content:center;
	width:100%;
	padding-block:30px;	
	img{
		width:40%;
		@media (max-width: 800px) {width:100%; }
	}
	@media (max-width: 800px) {display:block;}
}
.sectionb{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:40%;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));
	}
}
.sectionc{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:45%;
	}
}
.sectiond{
	display:flex;
	justify-content:center;
	width:100%;

	padding-block:30px;
	img{
		width:80%;
		box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
	}
}
.thirdCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #00a1d7, #00dfc8);
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	flex-wrap:wrap;
	h1{font-family:'Montserrat';
		font-weight: 800;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:#740094;
		padding-bottom:30px;
		padding-top: 120px;
		@media (max-width: 800px) {font-size:22px; line-height:25px; padding-top:100px;}
	}
	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 25px;
		text-align: center;
		line-height:28px;
		color:black;
		padding-block:40px;
		width:70%;
		margin:auto;
		@media (max-width: 800px) {font-size:20px; line-height:22px; width:90%; padding-block:25px;}
	}
	button{
		margin-inline:auto;
		width:40%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:43px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:25px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:default;
	}
}
.mobhide{
	@media (max-width: 800px) {display:none;}
}
.checkbox{
	margin-inline:auto;
		width:50%;
		border-radius:80px;
		h1{font-family:'Montserrat';
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		line-height:24px;
		color:black;
		padding-block:20px;
		text-align:left;
		@media (max-width: 800px) {font-size:18px; line-height:20px;} 
	}
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		padding:15px;
		background-color: white;
		cursor:default;
		border: 3px solid #fd3dab;
		@media (max-width: 800px) {width:95%;padding:20px;}
}
.modCont{
	width:100%;
	display:flex;
	background: linear-gradient(to bottom, #d7baf2, #00a1d7);
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	flex-wrap:wrap;
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:black;
		padding-block:20px;
		@media (max-width: 800px) {
			font-size:22px; line-height:25px;
		}
	}
	img{
		width:18%;
		border-radius:20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		margin-block:20px;
		@media (max-width: 800px) {width:45%;}
	}
}
.fifCont{
	width:100%;
	background: linear-gradient(to bottom, #d7baf2, #fd3dab);
	h1{
		font-family:'Montserrat';
		font-weight: 800;
		font-size: 45px;
		text-align: center;
		line-height:50px;
		color:black;
		padding-block:20px;
		margin-bottom:20px;
		@media (max-width: 800px) {font-size:25px; line-height:28px;}
	}
	padding-bottom:40px;
}
.bonusCont{
padding-block:10px;
	background: linear-gradient(to bottom, black, #740094);
	h1{
		font-family:'Montserrat';
		font-weight: 800;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:white;
		padding-bottom:20px;
		padding-top:50px;
		@media (max-width: 800px) {font-size:25px; line-height:27px;}
	}
}
.checktwo{
	margin-inline:auto;
		width:40%;
		border-radius:80px;
		p{font-family:'Montserrat';
		font-weight: 400;
		font-size: 20px;
		text-align: center;
		line-height:22px;
		color:white;
		padding-block:15px;
		text-align:left;
		@media (max-width: 800px) {font-size:20px; line-height:22px; padding-block:10px;}
	}
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		padding:35px;
		background-color: #740094;
		cursor:default;
		border: 3px solid #fd3dab;
		@media (max-width: 800px) {width:90%;}
}
.textboxb{
	width:60%;
	display:flex;
	flex-direction:column;
	@media (max-width: 800px) {width:100%;}
	
}
.questionBox{
	background-color:#740094;
	border-radius:15px;
	transition: height 0.5s ease;
	padding:15px;
	overflow:hidden;
	margin-block:10px;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	p{
		font-family:'Montserrat';
		font-weight: 500;
		font-size: 22px;
		line-height:28px;
		color:white;
		margin-block:10px;
		@media (max-width: 800px) {font-size:20px; line-height:22px;}
	}
}
.question{
	display:flex;
	justify-content:space-between;
	width:100%;
	cursor:pointer;
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: left;
		line-height:30px;
		color:white;
		@media (max-width: 800px) {font-size:22px; line-height:25px;}
	}
	h2{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: right;
		line-height:30px;
		color:white;
		@media (max-width: 800px) {font-size:30px; line-height:32px;}
	}
}
.textboxa{
	width:47%;
	display:flex;
	flex-direction:column;
	align-items:center;
	img{
		width:100%;

		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px));
	}
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		line-height:48px;
		color:#ffbd59;
		padding-block:10px;
	}
	button{
		width:90%;
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:43px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:25px;
		padding-block:15px;
		background-color: #fd3dab;
		cursor:pointer;
	}

}
.fotoa{
	width:45%;
	border-radius:50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

`


export default GlobalStyle
