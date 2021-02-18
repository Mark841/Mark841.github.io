gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1_1final = [];

gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDAlternate_95PlayerObjects1= [];
gdjs.Level_321Code.GDAlternate_95PlayerObjects2= [];
gdjs.Level_321Code.GDEnemy1Objects1= [];
gdjs.Level_321Code.GDEnemy1Objects2= [];
gdjs.Level_321Code.GDEnemy2Objects1= [];
gdjs.Level_321Code.GDEnemy2Objects2= [];
gdjs.Level_321Code.GDPointObjects1= [];
gdjs.Level_321Code.GDPointObjects2= [];
gdjs.Level_321Code.GDPickUpObjects1= [];
gdjs.Level_321Code.GDPickUpObjects2= [];
gdjs.Level_321Code.GDBulletObjects1= [];
gdjs.Level_321Code.GDBulletObjects2= [];
gdjs.Level_321Code.GDHealthObjects1= [];
gdjs.Level_321Code.GDHealthObjects2= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDKillsObjects1= [];
gdjs.Level_321Code.GDKillsObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level_321Code.GDBulletObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects = Hashtable.newFrom({"Enemy1": gdjs.Level_321Code.GDEnemy1Objects1, "Enemy2": gdjs.Level_321Code.GDEnemy2Objects1});gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addForce(0, -(25), 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addForce(-(25), 0, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addForce(0, 25, 0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].addForce(25, 0, 0);
}
}}

}


{



}


{

gdjs.Level_321Code.GDPlayerObjects1.length = 0;


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.GDPlayerObjects1_1final.length = 0;gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) != (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointY(""));
if( gdjs.Level_321Code.condition0IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects1_1final.push(gdjs.Level_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) != (( gdjs.Level_321Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects2[0].getPointX(""));
if( gdjs.Level_321Code.condition1IsTrue_1.val ) {
    gdjs.Level_321Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_321Code.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_321Code.GDPlayerObjects1_1final.indexOf(gdjs.Level_321Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Level_321Code.GDPlayerObjects1_1final.push(gdjs.Level_321Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDPlayerObjects1_1final, gdjs.Level_321Code.GDPlayerObjects1);
}
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 180, runtimeScene);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition0IsTrue_0;
gdjs.Level_321Code.condition0IsTrue_1.val = false;
gdjs.Level_321Code.condition1IsTrue_1.val = false;
{
gdjs.Level_321Code.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_1.val ) {
{
gdjs.Level_321Code.condition1IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "Shot");
}}
gdjs.Level_321Code.conditionTrue_1.val = true && gdjs.Level_321Code.condition0IsTrue_1.val && gdjs.Level_321Code.condition1IsTrue_1.val;
}
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.Level_321Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].putAround((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 15, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getAngle()));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 150, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shot");
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "EnemySpawning");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.Level_321Code.GDEnemy1Objects1.length = 0;

gdjs.Level_321Code.GDEnemy2Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), -(40), gdjs.randomInRange(0, 580), "");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), 780, gdjs.randomInRange(0, 580), "");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), gdjs.randomInRange(0, 780), -(40), "");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 2)), gdjs.randomInRange(0, 780), 580, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].flipX(true);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].rotateTowardPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 0, runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].rotateTowardPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.2));
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.2));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawning");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].addForceTowardPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 25, 0);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].addForceTowardPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 25, 0);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Level_321Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kills"), gdjs.Level_321Code.GDKillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDHealthObjects1[i].setString("Health: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKillsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDKillsObjects1[i].setString("Enemies Killed: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) <= 0;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level_321Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBulletObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBulletObjects1 */
/* Reuse gdjs.Level_321Code.GDEnemy1Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.Level_321Code.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy2"), gdjs.Level_321Code.GDEnemy2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDEnemy1Objects1ObjectsGDgdjs_46Level_95321Code_46GDEnemy2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDEnemy1Objects1 */
/* Reuse gdjs.Level_321Code.GDEnemy2Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level_321Code.GDEnemy2Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDEnemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).sub(1);
}}

}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDAlternate_95PlayerObjects1.length = 0;
gdjs.Level_321Code.GDAlternate_95PlayerObjects2.length = 0;
gdjs.Level_321Code.GDEnemy1Objects1.length = 0;
gdjs.Level_321Code.GDEnemy1Objects2.length = 0;
gdjs.Level_321Code.GDEnemy2Objects1.length = 0;
gdjs.Level_321Code.GDEnemy2Objects2.length = 0;
gdjs.Level_321Code.GDPointObjects1.length = 0;
gdjs.Level_321Code.GDPointObjects2.length = 0;
gdjs.Level_321Code.GDPickUpObjects1.length = 0;
gdjs.Level_321Code.GDPickUpObjects2.length = 0;
gdjs.Level_321Code.GDBulletObjects1.length = 0;
gdjs.Level_321Code.GDBulletObjects2.length = 0;
gdjs.Level_321Code.GDHealthObjects1.length = 0;
gdjs.Level_321Code.GDHealthObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDKillsObjects1.length = 0;
gdjs.Level_321Code.GDKillsObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
