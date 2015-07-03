/**
 * Created by [BombSquad Inc](http://www.bmbsqd.com)
 * User: Andy Hawkins
 * Date: 7/3/15
 * Time: 11:17 AM
 */

///<reference path="../jquery/jquery.d.ts"/>

interface PNotifyModule {
	constructor(opts:PNotifyOptions);
	desktop?: PNotifyDesktop;
	buttons?: PNotifyButtons;
	nonblock?: PNotifyNonBlock;
	confirm?: PNotifyConfirm;
	history?: PNotifyHistory;
	reference?: PNotifyReference;
}

interface PNotifyOptions {
	title?: boolean; // false
	title_escape?: boolean; // false
	text?: boolean; // false
	text_escape?: boolean; // false
	styling?: string; // "brighttheme"
	addclass?: string; // ""
	cornerclass?: string; // ""
	auto_display?: boolean; // true
	width?: string; // "300px"
	min_height?: string; // "16px"
	type?: string; // "notice"
	icon?: boolean; // true
	animation?: string; // "fade"
	animate_speed?: string; // "slow"
	position_animate_speed?: number; // 500
	opacity?: number; // 1
	shadow?: boolean; // true
	hide?: boolean; // true
	delay?: number; // 8000
	mouse_reset?: boolean; // true
	remove?: boolean; // true
	insert_brs?: boolean // true
	stack?: PNotifyStacks;
}

interface PNotifyStacks {
	dir1?: string; // "down"
	dir2?: string; // "left"
	push?: string; // "bottom"
	spacing1?: number; // 25
	spacing2?: number; // 25
	context?: JQuery; // $("body")
}

interface PNotifyDesktop {
	desktop?: boolean; // false;
	fallback?: boolean; // true;
	icon?: string; // null
	tag?: string; // null
}

interface PNotifyButtons {
	closer?: boolean; // true
	closer_hover?: boolean; // true
	sticker?: boolean; // true
	sticker_hover?: boolean; // true
	show_on_nonblock?: boolean; // false
	labels?: {
		close?: string; // "Close"
		stick?: string; // "Stick"
	}
}

interface PNotifyNonBlock {
	nonblock?: boolean; // false;
	nonblock_opacity?: number; // .2
}

interface PNotifyConfirm {
	confirm?: boolean; // false
	prompt?: boolean; // false
	prompt_class?: string; // ""
	prompt_default?: string; // ""
	prompt_multi_line?: boolean; // false
	align?: string; // "right"
	buttons?: PNotifyConfirmButtons[];
}

interface PNotifyConfirmButtons {
	text?: string; // "Ok"
	addClass?: string; // ""
	promptTrigger?: boolean; // true
	click?: (notice:any,value:string) => void;
}

interface PNotifyHistory {
	history?: boolean; // true
	menu?: boolean; // false
	fixed?: boolean; // true
	maxonscreen?: number; // Inf
	labels?: {
		redisplay?: string; // "Redisplay"
		all?: string; // "All"
		last?: string; // "Last"
	}
}

interface PNotifyReference {
	putThing?: boolean; // False
	labels?: {
		text?: string; // "Spin Around"
	}
}

declare var PNotify: PNotifyModule;

declare module "PNotify" {
	export = PNotifyModule
}