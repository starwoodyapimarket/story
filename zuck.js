/*
    zuck.js
    https://github.com/ramon82/zuck.js
    MIT License
*/

.stories.carousel{white-space:nowrap;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;}
.stories.carousel::-webkit-scrollbar { width: 0px;background: transparent;}
.stories.carousel .story{display:inline-block;width:18vw;max-width:90px;margin:0 6px;}
.stories.carousel .story:first-child{margin-left:0;}
.stories.carousel .story:last-child{margin-right:0;}

.stories.carousel .story > a {text-align:center;display:block;}
.stories.carousel .story > a:active > .img {transform: scale(0.9);}
.stories.carousel .story > a > .img {display:block;box-sizing:border-box;font-size:0;max-height:90px;height:18vw;overflow:hidden;transition: transform 0.2s;}
.stories.carousel .story > a > .img > * {display:block;box-sizing:border-box;height:100%;width:100%;background-size:cover;background-position: center;}
.stories.carousel .story > a > .info {display:inline-block;margin-top:.5em;line-height:1.2em;width:100%;overflow:hidden;text-overflow:ellipsis}
.stories.carousel .story > a > .info strong {font-weight:300;}
.stories.carousel .story > a > .info .time {display: none;}
.stories.carousel .story > .items {display:none;}

.stories.list{white-space:nowrap;overflow:auto;}
.stories.list .story{display: block;width: auto;margin: 6px;padding-bottom:6px;}
    
.stories.list .story > a {text-align:left;display:block;}
.stories.list .story > a > .img {height:42px;width:42px;max-width:42px;margin-right: 12px;vertical-align: top;display:inline-block;box-sizing:border-box;font-size:0;overflow:hidden}
.stories.list .story > a > .img > * {display:block;box-sizing:border-box;height:100%;width:100%;background-size:cover;background-position: center;}
.stories.list .story > a > .info {display:inline-block;line-height:1.6em;overflow:hidden;text-overflow:ellipsis;vertical-align: top;}
.stories.list .story > a > .info strong {font-weight:500;display: block}
.stories.list .story > a > .info .time {display: inline-block;}
.stories.list .story > .items {display:none;}

@-webkit-keyframes zuckSlideTime {0%{max-width: 0;}100%{max-width:100%;}}
@keyframes zuckSlideTime {0%{max-width: 0;}100%{max-width:100%;}}

@-webkit-keyframes zuckLoading {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}
@keyframes zuckLoading {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}

#zuck-modal{outline: 0!important;overflow:hidden;position:fixed;background:rgba(0,0,0,0.75);0;z-index:100000;font-size:14px;font-family:inherit;}
#zuck-modal-content, #zuck-modal-content .story-viewer, #zuck-modal-content .story-viewer > .slides, #zuck-modal-content .story-viewer > .slides > *{width:100vw;height:100%; top: 0; bottom: 0;position: absolute;overflow:hidden;}
#zuck-modal * {user-select:none;outline: 0;}

#zuck-modal.with-effects {transform: scale(0.01);transform-origin: top left;transition: 0.25s;position: absolute;top:0;left:0;width:100vw;height:100%; top: 0; bottom: 0;}
#zuck-modal.with-effects.animated {transform:scale(1);border-radius: 0; margin-top:0 !important;margin-left:0 !important;}
#zuck-modal.with-effects.closed {transform:translateY(100%);}

#zuck-modal .slider {width:300vw;height: 100%; top: 0; bottom: 0;left:-100vw;position: absolute;}
#zuck-modal .slider > * {width: 100vw;height: 100%; top: 0; bottom: 0; position: absolute;}
#zuck-modal .slider > .previous {left:0;}
#zuck-modal .slider > .viewing {left:100vw;}
#zuck-modal .slider > .next {left:200vw;}
#zuck-modal .slider.animated{-webkit-transition:-webkit-transform .25s linear;transition:-webkit-transform .25s linear;transition:transform .25s linear;transition:transform .25s linear, -webkit-transform .25s linear;}

#zuck-modal.with-cube #zuck-modal-content {perspective: 1000vw;transform:scale(0.95);perspective-origin: 50% 50%;overflow: visible;transition:0.3s;}
#zuck-modal.with-cube .slider {transform-style: preserve-3d;transform: rotateY(0deg)}
#zuck-modal.with-cube .slider > .previous {backface-visibility: hidden;left: 100vw;transform: rotateY(270deg) translateX(-50%);transform-origin: center left;}
#zuck-modal.with-cube .slider > .viewing {backface-visibility: hidden;left: 100vw;transform: translateZ(50vw);}
#zuck-modal.with-cube .slider > .next {backface-visibility: hidden;left:100vw;transform: rotateY(-270deg) translateX(50%);transform-origin: top right;}

#zuck-modal-content .story-viewer.paused.longPress .head,#zuck-modal-content .story-viewer.paused.longPress .slides-pointers,#zuck-modal-content .story-viewer.paused.longPress .tip{opacity:0;}
#zuck-modal-content .story-viewer.viewing:not(.paused):not(.stopped) .slides-pointers > * > .active > b{-webkit-animation-play-state:running;animation-play-state:running;}
#zuck-modal-content .story-viewer.next{z-index:10;}
#zuck-modal-content .story-viewer.viewing{z-index:5;}
#zuck-modal-content .story-viewer.previous{z-index:0;}
#zuck-modal-content .story-viewer.muted .tip.muted, #zuck-modal-content .story-viewer.loading .head .loading {display: block}
#zuck-modal-content .story-viewer.loading .head .right .time, #zuck-modal-content .story-viewer.loading .head .right .close {display: none}

#zuck-modal-content .story-viewer .slides-pointers{display:table;table-layout:fixed;border-spacing:6px;border-collapse:separate;position:absolute;width:100vh; top: 0; bottom: 0;top:0;left:calc(50vw - 50vh);right:calc(50vw - 50vh);z-index:100020;}
#zuck-modal-content .story-viewer .slides-pointers > *{display:table-row;}
#zuck-modal-content .story-viewer .slides-pointers > * > *{display:table-cell;background:rgba(255,255,255,0.5);border-radius:2px;}
#zuck-modal-content .story-viewer .slides-pointers > * > .seen{background:#fff;}
#zuck-modal-content .story-viewer .slides-pointers > * > * > b{background:#fff;width:auto;max-width:0;height:2px;display:block;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:paused;animation-play-state:paused;border-radius:2px;}
#zuck-modal-content .story-viewer .slides-pointers > * > .active > b{-webkit-animation-name:zuckSlideTime;animation-name:zuckSlideTime;-webkit-animation-timing-function:linear;animation-timing-function:linear;}

#zuck-modal-content .story-viewer .head{position:absolute;height:56px;left:0;right:0;line-height:56px;z-index:100010;color:#fff;font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,0.35), 1px 0 1px rgba(0,0,0,0.35);padding:0 6px;}
#zuck-modal-content .story-viewer .head .img{vertical-align: top;background-size:cover;width:42px;height:42px;display:inline-block;margin-right:12px;border-radius:50%;vertical-align:middle;background-repeat:no-repeat;background-position:center;}
#zuck-modal-content .story-viewer .head .img:before{content:'';display:block;width:100%;height:100%;border-radius:50%;border:1px solid #000;opacity:0.1;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";box-sizing:border-box;}
#zuck-modal-content .story-viewer .head .time{opacity:0.75;font-weight:500;font-size:13px;}
#zuck-modal-content .story-viewer .head .left{line-height: 1 !important;display:inline-block;margin:6px 0;}
#zuck-modal-content .story-viewer .head .left > div{display:inline-block;max-width:30vw;vertical-align:middle;}
#zuck-modal-content .story-viewer .head .left > div > *{width:100%;display:inline-block;line-height:21px;}
#zuck-modal-content .story-viewer .head .left > div > strong {font-weight: 500;}
#zuck-modal-content .story-viewer .head .right{float:right;}
#zuck-modal-content .story-viewer .head .right .close, #zuck-modal-content .story-viewer .head .back {font-size:42px;width:48px;cursor: pointer;text-align:center;}
#zuck-modal-content .story-viewer .head .left > .back {display: none; width:24px; margin:-6px -6px 0 -6px}
#zuck-modal-content .story-viewer .head .right .time {display:none;}
#zuck-modal-content .story-viewer .head .loading {display:none;border-radius:50%;width:30px;height:30px;border:4px solid rgba(255,255,255,0.2);box-sizing: border-box;border-top-color:#FFF;-webkit-animation:zuckLoading 1s infinite linear;animation:zuckLoading 1s infinite linear;}

#zuck-modal-content .story-viewer .head, #zuck-modal-content .story-viewer .slides-pointers, #zuck-modal-content .story-viewer .tip{-webkit-transition:opacity .5s;transition:opacity .5s;}

#zuck-modal-content .story-viewer .slides .item{display:none;overflow:hidden;background:#000;}
#zuck-modal-content .story-viewer .slides .item:before{z-index: 4;background: transparent;content:'';position: absolute;left:0;right:0;bottom:0;top:0;}
#zuck-modal-content .story-viewer .slides .item > .media {height:100%;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin:auto;}
#zuck-modal-content .story-viewer .slides .item.active, #zuck-modal-content .story-viewer .slides .item.active .tip.link {display:block;}

#zuck-modal-content .story-viewer .tip{z-index: 5; text-decoration: none;display: none;border-radius:24px;background:rgba(0,0,0,0.5);font-size:16px;position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:1000;color:#fff;text-align:center;text-transform:uppercase;font-weight:500;padding:12px 24px;}


@media (max-width: 1024px) {
	#zuck-modal-content .story-viewer .head{top:3px;}
	#zuck-modal-content .story-viewer .head .loading {width: 24px;height: 24px;margin: 6px 0;}
	#zuck-modal-content .story-viewer .head .img{width:30px;height:30px;margin-right:12px;}
	#zuck-modal-content .story-viewer .head .left{font-size:15px;margin:15px 0;}
	#zuck-modal-content .story-viewer .head .left > div {line-height:30px;}
	#zuck-modal-content .story-viewer .head .right .time{display:block;white-space:nowrap;font-size:15px;margin: 15px 0;line-height: 30px}
	#zuck-modal-content .story-viewer .head .left > .back {display: none; background: transparent;z-index: 20; visibility: visible;margin:-6px 0;position: absolute;height:42px;width:72px;line-height: 36px;text-align: left; vertical-align: top;text-shadow:none;}
	
	#zuck-modal-content .story-viewer.with-back-button .head .left > .back {display: block;}
	#zuck-modal-content .story-viewer.with-back-button .head .left .img {margin-left:18px}
    
	#zuck-modal-content .story-viewer .slides-pointers {width:100vw;left:0;right:0;}
	
	#zuck-modal-content .story-viewer .tip{font-size:14px;padding:6px 12px;}
	#zuck-modal-content .story-viewer .head .left .time,#zuck-modal-content .story-viewer .head .right .close{display:none;}
}
