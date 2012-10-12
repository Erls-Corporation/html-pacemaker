#!/usr/bin/env node

var fs = require("fs")
,   pth = require("path")
,   today = new Date
,   pad0 = function (str) { str = "" + str; return str.length === 1 ? "0" + str : str; }
,   config = {
        status:     "ED"
    ,   date:   [today.getFullYear(), pad0(today.getMonth() + 1), pad0(today.getDate())].join("-")
        // XXX insert defaults here
    }
;

// Configuration processing
try {
    var localConfig = require("local-config.json");
    // XXX merge
    
    // defaulting
    config.snapshot = config.status !== "ED";
}
catch (e) {
    console.log([
        "Pacemaker does not know where to find the sources on its own."
    ,   "Please create a local-config.json based on local-config.json.sample"
    ,   "at the root of the html-pacemaker directory."
        ].join("\n"));
}

// TODO:
//  - parse local configuration
//  - override default configuration
//  - parse options based on the command (generate, check, etc.)
//  - for ReSpec specs (which are XXX):
//      - load in PhantomJS
//      - pass params using the URL (specStatus, publishDate, previousPublishDate, previousStatus, lcEnd, crEnd)
//      - grab the result and output
//      - get resource dependencies if any
//  - for HTML 4 diff
//      - grab the source
//      - apply Anolis (ask for settings)
//      - output
//  - for Core, 2D, Microdata
//      - override the boilerplate with PUB and such
//      - run heartbeat.js
//      - restore the boilerplate
//      - copy the result
//  - for Author and Markup
//      - ask Mike

// Dependencies:
//  - Anolis (specify a version)
//  - html5lib
//  - PhantomJS

// Spec sources:
//  - list the real sources
//  - move those to GH that can be
//  - fix those that need tweaking

