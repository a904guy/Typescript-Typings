/**
 * Created by [BombSquad Inc](http://www.bmbsqd.com)
 * User: Andy Hawkins
 * Date: 3/23/15
 * Time: 5:53 PM
 */

/*
 Drop.js is a powerful Javascript and CSS library for creating dropdowns and other floating displays.
 [Drop.js](https://github.com/HubSpot/drop)
 */

interface window {
	Drop: Drop;
}

interface DropOptions {
	target?:any;
	content?:string;
	position?:string;
	openOn?:string;
	constrainToWindow?:boolean;
	constrainToScrollParent?:boolean;
	classes?:string;
	remove?:boolean;
	tetherOptions?:{};

}

declare class Drop
{
	constructor(options:DropOptions);
	open();
	close();
	remove();
	toggle();
	isOpened();
	position();
	destroy();
	on(event:string,lamba:Function);
	off(event:string);
	once(event:string,lamba:Function);
}

//declare var Drop:DropInstance;

declare module "Drop" {
	export = Drop;
}