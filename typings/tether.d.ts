/**
 * Created by [BombSquad Inc](http://www.bmbsqd.com)
 * User: Andy Hawkins
 * Date: 3/23/15
 * Time: 5:53 PM
 */


interface TetherOptions
{
	element?:HTMLElement|any;
	target?:HTMLElement|any;
	classes?:{};
	classPrefix?:string;
	attachment?:string; // Mixture, space delimited: left|center|right|top|middle|bottom
	targetAttachment?:string; // Mixture, space delimited: left|center|right|top|middle|bottom
	offset?:string;
	targetOffset?:string;
	targetModifier?:string;
	constraints?: TetherOptionsConstraints[];
	optimizations?: TetherOptionsOptimizations;
}

interface TetherOptionsConstraints
{
	to:string;
	pin?:string[]|boolean;
	//pin:string[];
	attachment?:string; // Mixture, space delimited: element|target|both|together|none
}

interface TetherOptionsOptimizations
{
	moveElement?:boolean;
	gpu?:boolean;
}

declare class Tether
{
	constructor(options:any);
	setOptions(options:any);
	//constructor(options?:TetherOptions);
	//setOptions(options:TetherOptions);
	disable();
	enable();
	destroy();
	position();
}

declare module "Tether" {
	export = Tether;
}