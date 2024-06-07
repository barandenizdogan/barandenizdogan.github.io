gdjs.GameSceneCode = {};
gdjs.GameSceneCode.GDBigBrownMeteor1Objects1= [];
gdjs.GameSceneCode.GDBigBrownMeteor1Objects2= [];
gdjs.GameSceneCode.GDBigBrownMeteor1Objects3= [];
gdjs.GameSceneCode.GDBigBrownMeteor1Objects4= [];
gdjs.GameSceneCode.GDBigBrownMeteor1Objects5= [];
gdjs.GameSceneCode.GDBigGreyMeteor1Objects1= [];
gdjs.GameSceneCode.GDBigGreyMeteor1Objects2= [];
gdjs.GameSceneCode.GDBigGreyMeteor1Objects3= [];
gdjs.GameSceneCode.GDBigGreyMeteor1Objects4= [];
gdjs.GameSceneCode.GDBigGreyMeteor1Objects5= [];
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects1= [];
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2= [];
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3= [];
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects4= [];
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects5= [];
gdjs.GameSceneCode.GDOrangePlayerShip3Objects1= [];
gdjs.GameSceneCode.GDOrangePlayerShip3Objects2= [];
gdjs.GameSceneCode.GDOrangePlayerShip3Objects3= [];
gdjs.GameSceneCode.GDOrangePlayerShip3Objects4= [];
gdjs.GameSceneCode.GDOrangePlayerShip3Objects5= [];
gdjs.GameSceneCode.GDWallsObjects1= [];
gdjs.GameSceneCode.GDWallsObjects2= [];
gdjs.GameSceneCode.GDWallsObjects3= [];
gdjs.GameSceneCode.GDWallsObjects4= [];
gdjs.GameSceneCode.GDWallsObjects5= [];
gdjs.GameSceneCode.GDBlackSpaceObjects1= [];
gdjs.GameSceneCode.GDBlackSpaceObjects2= [];
gdjs.GameSceneCode.GDBlackSpaceObjects3= [];
gdjs.GameSceneCode.GDBlackSpaceObjects4= [];
gdjs.GameSceneCode.GDBlackSpaceObjects5= [];
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects1= [];
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2= [];
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects3= [];
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects4= [];
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects5= [];
gdjs.GameSceneCode.GDTrailObjects1= [];
gdjs.GameSceneCode.GDTrailObjects2= [];
gdjs.GameSceneCode.GDTrailObjects3= [];
gdjs.GameSceneCode.GDTrailObjects4= [];
gdjs.GameSceneCode.GDTrailObjects5= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects1= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects2= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects3= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects4= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects5= [];


gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigBrownMeteor1Objects4Objects = Hashtable.newFrom({"BigBrownMeteor1": gdjs.GameSceneCode.GDBigBrownMeteor1Objects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigGreyMeteor1Objects4Objects = Hashtable.newFrom({"BigGreyMeteor1": gdjs.GameSceneCode.GDBigGreyMeteor1Objects4});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMediumBrownMeteor1Objects3Objects = Hashtable.newFrom({"MediumBrownMeteor1": gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Randomizer")) == 0;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDBigBrownMeteor1Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigBrownMeteor1Objects4Objects, gdjs.randomInRange(0, 720), -(100), "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDBigBrownMeteor1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigBrownMeteor1Objects4[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBigBrownMeteor1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigBrownMeteor1Objects4[i].rotateTowardAngle(gdjs.randomInRange(0, 360), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Randomizer")) == 1;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDBigGreyMeteor1Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigGreyMeteor1Objects4Objects, gdjs.randomInRange(0, 720), -(100), "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDBigGreyMeteor1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigGreyMeteor1Objects4[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBigGreyMeteor1Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigGreyMeteor1Objects4[i].rotateTowardAngle(gdjs.randomInRange(0, 360), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Randomizer")) == 2;
if (isConditionTrue_0) {
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDMediumBrownMeteor1Objects3Objects, gdjs.randomInRange(0, 720), -(100), "");
}{for(var i = 0, len = gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3[i].addForce(0, 250, 1);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3[i].rotateTowardAngle(gdjs.randomInRange(0, 360), 0, runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawn");
}{runtimeScene.getScene().getVariables().get("Difficulty").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RockSpawn") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Difficulty"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("Randomizer").setNumber(gdjs.randomInRange(0, 2));
}{runtimeScene.getScene().getVariables().get("Difficulty").mul(0.99);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawn");
}
{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor1"), gdjs.GameSceneCode.GDBigBrownMeteor1Objects2);
gdjs.copyArray(runtimeScene.getObjects("BigGreyMeteor1"), gdjs.GameSceneCode.GDBigGreyMeteor1Objects2);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor1"), gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBigBrownMeteor1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBigBrownMeteor1Objects2[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBigBrownMeteor1Objects2[k] = gdjs.GameSceneCode.GDBigBrownMeteor1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBigBrownMeteor1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDBigGreyMeteor1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDBigGreyMeteor1Objects2[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDBigGreyMeteor1Objects2[k] = gdjs.GameSceneCode.GDBigGreyMeteor1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDBigGreyMeteor1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2[i].getY() > 1400 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2[k] = gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBigBrownMeteor1Objects2 */
/* Reuse gdjs.GameSceneCode.GDBigGreyMeteor1Objects2 */
/* Reuse gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBigBrownMeteor1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigBrownMeteor1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDBigGreyMeteor1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBigGreyMeteor1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StarryBackgroundStars2"), gdjs.GameSceneCode.GDStarryBackgroundStars2Objects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDStarryBackgroundStars2Objects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStarryBackgroundStars2Objects3[i].setOpacity(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackSpace"), gdjs.GameSceneCode.GDBlackSpaceObjects2);
gdjs.copyArray(runtimeScene.getObjects("StarryBackgroundStars2"), gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2[i].setYOffset(gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBlackSpaceObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBlackSpaceObjects2[i].setYOffset(gdjs.GameSceneCode.GDBlackSpaceObjects2[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(100)));
}
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Trail"), gdjs.GameSceneCode.GDTrailObjects3);
{for(var i = 0, len = gdjs.GameSceneCode.GDTrailObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTrailObjects3[i].rotateTowardAngle(90, 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OrangePlayerShip3"), gdjs.GameSceneCode.GDOrangePlayerShip3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Trail"), gdjs.GameSceneCode.GDTrailObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDTrailObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTrailObjects2[i].setPosition((( gdjs.GameSceneCode.GDOrangePlayerShip3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDOrangePlayerShip3Objects2[0].getPointX("")),(( gdjs.GameSceneCode.GDOrangePlayerShip3Objects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDOrangePlayerShip3Objects2[0].getPointY("")));
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWallsObjects2Objects = Hashtable.newFrom({"Walls": gdjs.GameSceneCode.GDWallsObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDOrangePlayerShip3Objects1Objects = Hashtable.newFrom({"OrangePlayerShip3": gdjs.GameSceneCode.GDOrangePlayerShip3Objects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDBigGreyMeteor1Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDMediumBrownMeteor1Objects1Objects = Hashtable.newFrom({"BigBrownMeteor1": gdjs.GameSceneCode.GDBigBrownMeteor1Objects1, "BigGreyMeteor1": gdjs.GameSceneCode.GDBigGreyMeteor1Objects1, "MediumBrownMeteor1": gdjs.GameSceneCode.GDMediumBrownMeteor1Objects1});
gdjs.GameSceneCode.asyncCallback8794372 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback8794372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigBrownMeteor1"), gdjs.GameSceneCode.GDBigBrownMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BigGreyMeteor1"), gdjs.GameSceneCode.GDBigGreyMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("MediumBrownMeteor1"), gdjs.GameSceneCode.GDMediumBrownMeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("OrangePlayerShip3"), gdjs.GameSceneCode.GDOrangePlayerShip3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDOrangePlayerShip3Objects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDBigBrownMeteor1Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDBigGreyMeteor1Objects1ObjectsGDgdjs_9546GameSceneCode_9546GDMediumBrownMeteor1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8793972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Crash", false, 100, 1);
}
{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("OrangePlayerShip3"), gdjs.GameSceneCode.GDOrangePlayerShip3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Walls"), gdjs.GameSceneCode.GDWallsObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDOrangePlayerShip3Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDOrangePlayerShip3Objects2[i].separateFromObjectsList(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWallsObjects2Objects, false);
}
}}

}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameSceneCode.eventsList6(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDBigBrownMeteor1Objects1.length = 0;
gdjs.GameSceneCode.GDBigBrownMeteor1Objects2.length = 0;
gdjs.GameSceneCode.GDBigBrownMeteor1Objects3.length = 0;
gdjs.GameSceneCode.GDBigBrownMeteor1Objects4.length = 0;
gdjs.GameSceneCode.GDBigBrownMeteor1Objects5.length = 0;
gdjs.GameSceneCode.GDBigGreyMeteor1Objects1.length = 0;
gdjs.GameSceneCode.GDBigGreyMeteor1Objects2.length = 0;
gdjs.GameSceneCode.GDBigGreyMeteor1Objects3.length = 0;
gdjs.GameSceneCode.GDBigGreyMeteor1Objects4.length = 0;
gdjs.GameSceneCode.GDBigGreyMeteor1Objects5.length = 0;
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects1.length = 0;
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects2.length = 0;
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects3.length = 0;
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects4.length = 0;
gdjs.GameSceneCode.GDMediumBrownMeteor1Objects5.length = 0;
gdjs.GameSceneCode.GDOrangePlayerShip3Objects1.length = 0;
gdjs.GameSceneCode.GDOrangePlayerShip3Objects2.length = 0;
gdjs.GameSceneCode.GDOrangePlayerShip3Objects3.length = 0;
gdjs.GameSceneCode.GDOrangePlayerShip3Objects4.length = 0;
gdjs.GameSceneCode.GDOrangePlayerShip3Objects5.length = 0;
gdjs.GameSceneCode.GDWallsObjects1.length = 0;
gdjs.GameSceneCode.GDWallsObjects2.length = 0;
gdjs.GameSceneCode.GDWallsObjects3.length = 0;
gdjs.GameSceneCode.GDWallsObjects4.length = 0;
gdjs.GameSceneCode.GDWallsObjects5.length = 0;
gdjs.GameSceneCode.GDBlackSpaceObjects1.length = 0;
gdjs.GameSceneCode.GDBlackSpaceObjects2.length = 0;
gdjs.GameSceneCode.GDBlackSpaceObjects3.length = 0;
gdjs.GameSceneCode.GDBlackSpaceObjects4.length = 0;
gdjs.GameSceneCode.GDBlackSpaceObjects5.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects1.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects2.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects3.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects4.length = 0;
gdjs.GameSceneCode.GDStarryBackgroundStars2Objects5.length = 0;
gdjs.GameSceneCode.GDTrailObjects1.length = 0;
gdjs.GameSceneCode.GDTrailObjects2.length = 0;
gdjs.GameSceneCode.GDTrailObjects3.length = 0;
gdjs.GameSceneCode.GDTrailObjects4.length = 0;
gdjs.GameSceneCode.GDTrailObjects5.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects5.length = 0;

gdjs.GameSceneCode.eventsList7(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
