import { createGlobalStyle } from 'styled-components';
import {roxo, lilas, azul, rosa, pastel} from './assets/colors.js'

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
	width:67%;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	padding-block:15px;
	@media (max-width: 800px) {width: 100%;}
	img{
		width:15%;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
		@media (max-width: 800px) {width:60%;}
	}
	p{
		font-family:'Montserrat';
		font-weight: 800;
		font-size: 30px;
		text-align: center;
		line-height:35px;
		color:${pastel};
		padding-block:10px;
		width:100%;
		@media (max-width: 800px) {width: 100%;font-size:20px; line-height:22px;}
	}
	h2{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 27px;
		text-align: center;
		line-height:33px;
		color:${pastel};
		padding-block:10px;
		width:100%;
		@media (max-width: 800px) {width: 100%; font-size:18px; line-height:20px;}
	}
	
	button{
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:20px;
		color:white;
		height:80px;
		padding: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		background-color: ${roxo};
		cursor:pointer;
		@media (max-width: 800px) {
			width:100%; font-size:18px; line-height:18px;
			padding: 0;
			padding-inline:5px;
			height: 70px;
		}
	}
}
.textCont{
	width:100%;
	display:flex;
	flex-direction:column;
	background: linear-gradient(to bottom, black, ${roxo});
	justify-content:space-between;
	align-items:center;
	padding-block:15px;
	padding-inline:5%;

	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 24px;
		text-align: left;
		line-height:28px;
		color:${pastel};
		padding-block:10px;
		width:80%;
		@media (max-width: 800px) {width: 100%;font-size:16px; line-height:18px;}
	}
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:33px;
		color:${pastel};
		padding-block:30px;
		width:70%;
		@media (max-width: 800px) {width: 100%; font-size:20px; line-height:22px; padding-block:15px;}
	}
}
.textCont3{
	width:100%;
	display:flex;
	flex-direction:column;
	background: linear-gradient(to bottom, black, ${roxo});
	justify-content:space-between;
	align-items:center;
	padding-top:15px;
	padding-inline:5%;
	padding-bottom:40px;
	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 24px;
		text-align: left;
		line-height:28px;
		color:${pastel};
		padding-block:10px;
		width:80%;
		@media (max-width: 800px) {width: 100%;font-size:16px; line-height:18px;}
	}
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:33px;
		color:${pastel};
		padding-block:30px;
		width:70%;
		@media (max-width: 800px) {width: 100%; font-size:20px; line-height:22px; padding-block:15px;}
	}
	@media (max-width: 800px) {padding-bottom:15px;}
}
	
.textContdois{
	width:100%;
	display:flex;
	flex-direction:column;
	background: linear-gradient(to bottom, ${roxo}, black);
	justify-content:space-between;
	align-items:center;
	padding-block:15px;
	padding-inline:5%;
	@media (max-width: 800px) {padding-bottom:0;}
	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 22px;
		text-align: left;
		line-height:24px;
		color:${pastel};
		padding-block:10px;
		width:100%;
		@media (max-width: 800px) {width: 100%;font-size:14px; line-height:16px;}
	}
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: center;
		line-height:33px;
		color:${pastel};
		padding-block:30px;
		width:70%;
		@media (max-width: 800px) {width: 100%; font-size:20px; line-height:22px; padding-block:15px;}
	}
}	

.buttonsbox{
display: flex;
justify-content: space-around;
flex-wrap: wrap;
width: 100%;
padding-bottom: 20px;
}
.falsebutton{
		width:30%;
		border-radius:20px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 20px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height:22px;
		color:white;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		padding:10px;
		background-color: ${azul};
		@media (max-width: 800px) {
			width:100%; font-size:14px; line-height:18px;
			margin-block: 10px;
		}
	}

.containerThird{
	width:100%;
	display:flex;
	flex-direction:column;
	background: #F9E1C5;
	justify-content:space-between;
	align-items:center;
	padding-block:25px;
	padding-inline:5%;
	p{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 24px;
		text-align: justify;
		line-height:30px;
		color:black;
		padding-block:10px;
		width:80%;
		@media (max-width: 800px) {font-size:16px; line-height:18px; font-weight:500;}
	}
	h1{
		font-family:'Montserrat';
		font-weight: bold;
		font-size: 30px;
		text-align: center;
		line-height:35px;
		color:${roxo};
		padding-block:10px;
		width:70%;
		@media (max-width: 800px) {font-size:22px; line-height:25px;}
	}
	
	button{
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:20px;
		color:white;
		height:80px;
		padding: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		background-color: ${rosa};
		cursor:pointer;
		@media (max-width: 800px) {
			width:100%; font-size:17px; line-height:18px;
			padding: 0;
			height: 70px;
			margin-top: 25px;
			margin-bottom: 0;
		}
	}

}
.mobhide{
	@media (max-width: 800px) {display: none;}
}
.fourthCont{
	width:100%;
	display:flex;
	flex-direction: column;
	background: ${pastel};
	align-items:center;
	padding-inline:4%;
	padding-block: 20px;
	button{
		border-radius:50px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:20px;
		color:white;
		height:80px;
		padding: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		margin-block:15px;
		background-color: ${rosa};
		cursor:pointer;
		@media (max-width: 800px) {
			width:100%; font-size:17px; line-height:18px;
			padding: 0;
			height: 70px;
		}
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
padding-block:30px;
padding-inline:4%;
background: black;
@media (max-width: 800px) {padding-bottom:0;}
h1{
	font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:white;
		padding-block:20px;
		margin-bottom:30px;

@media (max-width: 800px) {font-size:22px; line-height:25px;margin-bottom:0;}
}
}
.offertbox{
display:flex;
justify-content:center;
align-items:center;
width: 70%;
padding-block: 20px;
margin-top: 60px;
@media (max-width: 800px) {flex-direction:column; width: 100%;margin-top:0;}
}

.FAQ{
	background-color: ${pastel};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 30px;
	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 40px;
		text-align: center;
		line-height:40px;
		color:black;
		padding-block: 20px;

@media (max-width: 800px) {font-size:28px; line-height:30px; padding-block:0;}
}
	}

.oferta1{
	width:52%;
	background-color: ${roxo};
	box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
padding:20px;
display: flex;
flex-direction: column;
align-items: center;
border-radius:40px;
border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media (max-width: 800px) {
	width: 80%;
	border-top-right-radius: 40px;
	border-bottom-left-radius: 0;
  }

p{
	font-family:'Montserrat';
		font-weight: 500;
		font-size: 15px;
		line-height:22px;
		color:white;
		@media (max-width: 800px) {
	font-size:13px;
	line-height: 17px;
  }
}
}
.phonecollage{
	position: absolute;
	z-index: 2;
	top: -100px;
	width: 100%;
	filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
}
.oferta2{
	position: relative;
	width:48%;
	background-color: ${rosa};
	box-shadow:(0 0 10px rgba(0, 0, 0, 0.3));
padding-top:40px;
padding-bottom:10px;
display: flex;
flex-direction: column;
align-items: center;
border-radius:40px;
border: 1px solid ${roxo};
@media (max-width: 800px) {
	width: 100%;
	padding-block:30px;
  }
h2{
	font-family:'Montserrat';
		font-weight: 600;
		font-size: 25px;
		line-height:30px;
		color:white;
		margin-top: 90px;
		margin-bottom: 10px;
		text-align: center;
		@media (max-width: 800px) {
	margin-block:0;
	font-size: 22px;
	line-height: 27px;
  }
}
button{
		border-radius:30px;

		margin-block: 40px;
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		line-height:20px;
		color:white;
		padding: 30px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		background-color: ${roxo};
		cursor:pointer;
		@media (max-width: 800px) {
	margin-bottom:0px;
	margin-top:20px;
  }
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
	background: linear-gradient(to bottom, ${rosa}, ${lilas});
	justify-content:space-between;
	align-items:center;
	padding-inline:10%;
	padding-top:30px;
	flex-wrap:wrap;
	
	h1{font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:black;
		@media (max-width: 800px) {font-size:20px; line-height:22px;padding-block:0;}
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
		@media (max-width: 800px) {font-size:18px; line-height:20px; width:90%; padding-block:25px;}
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
.mobcolum{
	@media (max-width: 800px) {flex-direction: column;}
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
	flex-direction: column;
	background: black;
	justify-content:space-between;
	align-items:center;
	padding-bottom: 35px;
	padding-inline:10%;
	p{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 35px;
		text-align: center;
		line-height:40px;
		color:${pastel};
		padding-block:20px;
		@media (max-width: 800px) {
			font-size:20px; line-height:22px;
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
.mobgamb{

	@media (max-width: 800px) {
		flex-wrap: wrap;
	}
}
.fifCont{
	width:100%;
	background: linear-gradient(to bottom , ${lilas}, ${rosa});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 15px;
	h1{
		font-family:'Montserrat';
		font-weight: 700;
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
		width:50%;
		height: 100%;
		border-radius:30px;
		padding-block:25px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		p{font-family:'Montserrat';
		font-weight: 500;
		font-size: 20px;
		text-align: center;
		line-height:22px;
		color:white;
		padding-block:10px;
		text-align:left;
		@media (max-width: 800px) {font-size:17px; line-height:18px; padding-block:10px;}
	}
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		padding-inline:35px;
		background-color: #740094;
		cursor:default;
		border: 1px solid ${lilas};
		@media (max-width: 800px) {width:90%; padding-block:10px;}
}
.textboxb{
	width:100%;
	display:flex;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-block:20px;
	@media (max-width: 800px) {width:100%;margin-bottom:0%;}
	
}

.questionBox{
	display: flex;
	flex-direction: column;
	width: 20%;
	margin-inline:10px;
	padding-bottom: 15px;
	
	@media (max-width: 800px) {width:90%;}

		p{	font-family:'Montserrat';
		font-weight: 400;
		font-size: 18px;
		text-align: center;
		line-height:20px;
		color:black;
		text-align:left;
	transition: height 0.5s ease;

		@media (max-width: 800px) {font-size:15px; line-height:17px;}
	}
}
.imageContainer2{
	width: 25%;
	position: relative;
	margin-inline: auto;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	@media (max-width: 800px) {
		width: 40%;
	}
	img{
		width:100%;
		object-fit: cover;
	}
}
.imageContainer{
	width: 90%;
	position: relative;
	margin-inline: auto;
	overflow: hidden;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	img{
		width:100%;
		object-fit: cover;
	}
}
.imgdiv2{
	width: 30%;
}

.imgdiv{
	width: 100%;
	position: absolute;
	top:0;
	left:0;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	z-index:2;
	cursor: default;
	background: linear-gradient(to top, ${roxo} 0%, ${roxo} 15%, rgba(255, 0, 0, 0) 35%);
	h1{
z-index: 3;
font-family:'Montserrat';
		font-weight: 700;
		font-size: 22px;
		text-align: center;
		line-height:22px;
		color:${pastel};
		padding-bottom: 20px;
	}
}
.imgdiv4{
	width: 100%;
	position: absolute;
	top:0;
	left:0;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	z-index:2;
	cursor: default;
	background: linear-gradient(to top, ${roxo} 0%, ${roxo} 15%, rgba(255, 0, 0, 0) 35%);
	h1{
z-index: 3;
font-family:'Montserrat';
		font-weight: 700;
		font-size: 22px;
		text-align: center;
		line-height:22px;
		color:${pastel};
		padding-bottom: 20px;
		@media (max-width: 800px) {font-size:13px; padding-bottom:10px; line-height: 16px;}
	}
}
.questionBox2{
	display: flex;
	flex-direction: column;
	width: 43%;
	margin-inline:10px;
	@media (max-width: 800px) {width:90%;}

		p{	font-family:'Montserrat';
		font-weight: 500;
		font-size: 18px;
		text-align: center;
		line-height:20px;
		color:black;
		text-align:left;

		padding-bottom:15px;
	transition: height 0.5s ease;

		@media (max-width: 800px) {font-size:15px; line-height:17px;}
	}
}
.question{
	display:flex;
	justify-content:space-between;
	width:100%;
	cursor:pointer;
	width: 100%;
	background-color:${roxo};
	border-radius:12px;
	padding:15px;
	overflow:hidden;
	margin-block:10px;

	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

	h1{
		font-family:'Montserrat';
		font-weight: 600;
		font-size: 23px;
		text-align: left;
		line-height:25px;
		color:white;
		@media (max-width: 800px) {font-size:18px; line-height:20px;}
	}
	h2{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: right;
		line-height:30px;
		color:white;
		@media (max-width: 800px) {font-size:25px; line-height:25px;}
	}
}
.firstCont{
	display: flex;
	justify-content: space-around;
	width: 100%;
	padding-inline:5%;
	background: linear-gradient(to bottom, ${roxo}, ${rosa});
	@media (max-width: 800px) {flex-direction: column;}
}
.mobMod{
	p{
		@media (max-width: 800px) {width: 100%;}
	}
	@media (max-width: 800px) {width: 100%; padding-bottom: 15px;}
}
.secondCont{
	display: flex;
	justify-content: space-around;
	width: 100%;
	align-items: center;
	padding-inline:2%;
	@media (max-width: 800px) {flex-direction: column;}
}
.foto2{
	width: 28%;
	margin-block: 30px;
	object-fit: cover;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius:30px;
	@media (max-width: 800px) {width: 80%; margin-block:0;
	margin-inline: auto;}
	
}
.foto3{
	width: 38%;
	margin-block: 30px;
	filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.5));
	object-fit: cover;
	border-radius:30px;
	@media (max-width: 800px) {width: 80%; margin-inline: auto; margin-bottom:0;}
	
}
.question2{
	display:flex;
	justify-content:space-between;
	width:100%;
	cursor:pointer;
	width: 100%;
	background-color:${roxo};
	border-radius:15px;
	padding-inline:15px;
	overflow:hidden;
	margin-block:10px;
	align-items: center;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	@media (max-width: 800px) {padding-block:10px;}

	h1{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 22px;
		text-align: left;
		line-height:25px;
		color:white;
		@media (max-width: 800px) {font-size:18px; line-height:20px;}
	}
	h2{
		font-family:'Montserrat';
		font-weight: 700;
		font-size: 30px;
		text-align: right;
		line-height:30px;
		color:white;
		margin-left:5px;
		@media (max-width: 800px) {font-size:25px; line-height:25px;}
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
.mobtextgamb{
	@media (max-width: 800px) {font-size: 16px;}
}
`


export default GlobalStyle
