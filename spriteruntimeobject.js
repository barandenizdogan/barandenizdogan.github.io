var gdjs;(function(n){class r extends n.RuntimeObject{constructor(t,e){super(t,e);this._scaleX=1;this._scaleY=1;this._blendMode=0;this._flippedX=!1;this._flippedY=!1;this.opacity=255;this._animationFrameDirty=!0;this._updateIfNotVisible=!!e.updateIfNotVisible,this._renderer=new n.SpriteRuntimeObjectRenderer(this,t),this._animator=new n.SpriteAnimator(e.animations,n.SpriteRuntimeObjectRenderer.getAnimationFrameTextureManager(t.getGame().getImageManager())),this._updateAnimationFrame(),this.onCreated()}reinitialize(t){super.reinitialize(t);const e=this.getInstanceContainer();this._animator.reinitialize(t.animations),this._scaleX=1,this._scaleY=1,this._blendMode=0,this._flippedX=!1,this._flippedY=!1,this.opacity=255,this._updateIfNotVisible=!!t.updateIfNotVisible,this._renderer.reinitialize(this,e),this._updateAnimationFrame(),this.onCreated()}updateFromObjectData(t,e){return this._animator.updateFromObjectData(t.animations,e.animations),this._updateIfNotVisible=!!e.updateIfNotVisible,this.invalidateHitboxes(),!0}extraInitializationFromInitialInstance(t){if(t.numberProperties)for(let e=0,i=t.numberProperties.length;e<i;++e){const a=t.numberProperties[e];a.name==="animation"&&this.setAnimationIndex(a.value)}t.customSize&&(this.setWidth(t.width),this.setHeight(t.height))}update(t){if(!this._updateIfNotVisible&&!this._renderer.getRendererObject().visible)return;this._animator.step(this.getElapsedTime()/1e3)&&(this._updateAnimationFrame(),this.invalidateHitboxes()),this._renderer.ensureUpToDate()}updatePreRender(t){this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.ensureUpToDate()}_updateAnimationFrame(){this._animationFrameDirty=!1;const t=this._animator.getCurrentFrame();t&&this._renderer.updateFrame(t)}getRendererObject(){return this._renderer.getRendererObject()}updateHitBoxes(){const t=this._animator.getCurrentFrame();if(!!t){if(!t.hasCustomHitBoxes)return super.updateHitBoxes();for(let e=0;e<t.customHitBoxes.length;++e){e>=this.hitBoxes.length&&this.hitBoxes.push(new n.Polygon);for(let i=0;i<t.customHitBoxes[e].vertices.length;++i)i>=this.hitBoxes[e].vertices.length&&this.hitBoxes[e].vertices.push([0,0]),this._transformToGlobal(t.customHitBoxes[e].vertices[i][0],t.customHitBoxes[e].vertices[i][1],this.hitBoxes[e].vertices[i]);this.hitBoxes[e].vertices.length=t.customHitBoxes[e].vertices.length}this.hitBoxes.length=t.customHitBoxes.length}}setAnimation(t){this.setAnimationIndex(t)}setAnimationIndex(t){this._animator.setAnimationIndex(t)&&(this._renderer.update(),this._animationFrameDirty=!0,this.invalidateHitboxes())}setAnimationName(t){this._animator.setAnimationName(t)&&(this._renderer.update(),this._animationFrameDirty=!0,this.invalidateHitboxes())}getAnimation(){return this.getAnimationIndex()}getAnimationIndex(){return this._animator.getAnimationIndex()}getAnimationName(){return this._animator.getAnimationName()}isCurrentAnimationName(t){return this.getAnimationName()===t}setDirectionOrAngle(t){const e=this._animator.setDirectionOrAngle(this.angle,t);e!==null&&(this.angle=e,this._renderer.update(),this._animationFrameDirty=!0,this.invalidateHitboxes(),this._renderer.updateAngle())}getDirectionOrAngle(){return this._animator.getDirectionOrAngle(this.angle)}setAnimationFrame(t){this._animator.setAnimationFrameIndex(t)&&(this._animationFrameDirty=!0,this.invalidateHitboxes())}getAnimationFrame(){return this._animator.getAnimationFrameIndex()}getAnimationElapsedTime(){return this._animator.getAnimationElapsedTime()}setAnimationElapsedTime(t){this._animator.getAnimationElapsedTime()&&(this._animationFrameDirty=!0,this.invalidateHitboxes())}getAnimationDuration(){return this._animator.getAnimationDuration()}getAnimationFrameCount(){return this._animator.getAnimationFrameCount()}hasAnimationEndedLegacy(){return this._animator.hasAnimationEndedLegacy()}hasAnimationEnded2(){return this._animator.hasAnimationEnded()}hasAnimationEnded(){return this._animator.hasAnimationEnded()}animationPaused(){return this._animator.isAnimationPaused()}isAnimationPaused(){return this._animator.isAnimationPaused()}pauseAnimation(){this._animator.pauseAnimation()}playAnimation(){this._animator.resumeAnimation()}resumeAnimation(){this._animator.resumeAnimation()}getAnimationSpeedScale(){return this._animator.getAnimationSpeedScale()}setAnimationSpeedScale(t){this._animator.setAnimationSpeedScale(t)}getPointX(t){const e=this._animator.getCurrentFrame();if(t.length===0||e===null)return this.getX();const i=e.getPoint(t),a=n.staticArray(r.prototype.getPointX);return this._transformToGlobal(i.x,i.y,a),a[0]}getPointY(t){const e=this._animator.getCurrentFrame();if(t.length===0||e===null)return this.getY();const i=e.getPoint(t),a=n.staticArray(r.prototype.getPointY);return this._transformToGlobal(i.x,i.y,a),a[1]}getPointPosition(t){const e=this._animator.getCurrentFrame();if(t.length===0||e===null)return[this.getX(),this.getY()];const i=e.getPoint(t),a=n.staticArray(r.prototype.getPointX);return this._transformToGlobal(i.x,i.y,a),[a[0],a[1]]}_transformToGlobal(t,e,i){const a=this._animator.getCurrentFrame();let s=a.center.x,o=a.center.y;this._flippedX&&(t=t+(s-t)*2),this._flippedY&&(e=e+(o-e)*2);const h=Math.abs(this._scaleX),l=Math.abs(this._scaleY);t*=h,e*=l,s*=h,o*=l;const m=this.angle/180*Math.PI,d=Math.cos(m),u=Math.sin(m),g=t-s,_=e-o;t=s+d*g-u*_,e=o+u*g+d*_,i.length=2,i[0]=t+(this.x-a.origin.x*h),i[1]=e+(this.y-a.origin.y*l)}getDrawableX(){const t=this._animator.getCurrentFrame();if(t===null)return this.x;const e=Math.abs(this._scaleX);return this._flippedX?this.x+(-t.origin.x-this._renderer.getUnscaledWidth()+2*t.center.x)*e:this.x-t.origin.x*e}getDrawableY(){const t=this._animator.getCurrentFrame();if(t===null)return this.y;const e=Math.abs(this._scaleY);return this._flippedY?this.y+(-t.origin.y-this._renderer.getUnscaledHeight()+2*t.center.y)*e:this.y-t.origin.y*e}getCenterX(){const t=this._animator.getCurrentFrame();return t===null?0:this._flippedX?(this._renderer.getUnscaledWidth()-t.center.x)*Math.abs(this._scaleX):t.center.x*Math.abs(this._scaleX)}getCenterY(){const t=this._animator.getCurrentFrame();return t===null?0:this._flippedY?(this._renderer.getUnscaledHeight()-t.center.y)*Math.abs(this._scaleY):t.center.y*Math.abs(this._scaleY)}setX(t){if(t===this.x)return;this.x=t,this._animator.getCurrentFrame()!==null&&(this.invalidateHitboxes(),this._renderer.updateX())}setY(t){if(t===this.y)return;this.y=t,this._animator.getCurrentFrame()!==null&&(this.invalidateHitboxes(),this._renderer.updateY())}setAngle(t){const e=this._animator.setAngle(this.angle,t);e!==null&&(this.angle=e,this.invalidateHitboxes(),this._renderer.updateAngle())}getAngle(){return this._animator.getAngle(this.angle)}setBlendMode(t){this._blendMode!==t&&(this._blendMode=t,this._renderer.update())}getBlendMode(){return this._blendMode}setOpacity(t){t<0&&(t=0),t>255&&(t=255),this.opacity=t,this._renderer.updateOpacity()}getOpacity(){return this.opacity}hide(t){t===void 0&&(t=!0),this.hidden=t,this._renderer.updateVisibility()}setColor(t){this._renderer.setColor(t)}getColor(){return this._renderer.getColor()}flipX(t){t!==this._flippedX&&(this._scaleX*=-1,this._flippedX=t,this.invalidateHitboxes(),this._renderer.update())}flipY(t){t!==this._flippedY&&(this._scaleY*=-1,this._flippedY=t,this.invalidateHitboxes(),this._renderer.update())}isFlippedX(){return this._flippedX}isFlippedY(){return this._flippedY}getWidth(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.getWidth()}getHeight(){return this._animationFrameDirty&&this._updateAnimationFrame(),this._renderer.getHeight()}setWidth(t){this._animationFrameDirty&&this._updateAnimationFrame();const e=this._renderer.getUnscaledWidth();e!==0&&this.setScaleX(t/e)}setHeight(t){this._animationFrameDirty&&this._updateAnimationFrame();const e=this._renderer.getUnscaledHeight();e!==0&&this.setScaleY(t/e)}setSize(t,e){this.setWidth(t),this.setHeight(e)}setScale(t){t<0&&(t=0),!(t===Math.abs(this._scaleX)&&t===Math.abs(this._scaleY))&&(this._scaleX=t*(this._flippedX?-1:1),this._scaleY=t*(this._flippedY?-1:1),this._renderer.update(),this.invalidateHitboxes())}setScaleX(t){t<0&&(t=0),t!==Math.abs(this._scaleX)&&(this._scaleX=t*(this._flippedX?-1:1),this._renderer.update(),this.invalidateHitboxes())}setScaleY(t){t<0&&(t=0),t!==Math.abs(this._scaleY)&&(this._scaleY=t*(this._flippedY?-1:1),this._renderer.update(),this.invalidateHitboxes())}getScaleMean(){return(Math.abs(this._scaleX)+Math.abs(this._scaleY))/2}getScale(){const t=Math.abs(this._scaleX),e=Math.abs(this._scaleY);return t===e?t:Math.sqrt(t*e)}getScaleY(){return Math.abs(this._scaleY)}getScaleX(){return Math.abs(this._scaleX)}turnTowardObject(t,e){t!==null&&this.rotateTowardPosition(t.getDrawableX()+t.getCenterX(),t.getDrawableY()+t.getCenterY(),0,e)}}n.SpriteRuntimeObject=r,n.registerObject("Sprite",n.SpriteRuntimeObject),r.supportsReinitialization=!0})(gdjs||(gdjs={}));
//# sourceMappingURL=spriteruntimeobject.js.map
