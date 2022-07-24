export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-37daec74.js","imports":["_app/immutable/start-37daec74.js","_app/immutable/chunks/index-29635d82.js","_app/immutable/chunks/singletons-eb14b229.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js')
		],
		routes: [
			{
				type: 'endpoint',
				id: "kit-docs/[slug].meta.json",
				pattern: /^\/kit-docs\/([^/]+?)\.meta\.json$/,
				names: ["slug"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/kit-docs/_slug_.meta.json.js')
			},
			{
				type: 'endpoint',
				id: "kit-docs/[dir].sidebar.json",
				pattern: /^\/kit-docs\/([^/]+?)\.sidebar\.json$/,
				names: ["dir"],
				types: [null],
				load: () => import('../output/server/entries/endpoints/kit-docs/_dir_.sidebar.json.js')
			},
			{
				type: 'page',
				id: "docs/[...1]getting-started/[...1]quick-start",
				pattern: /^\/docs\/(.*?)getting-started\/(.*?)quick-start\/?$/,
				names: ["1","1"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...1]getting-started/[...2]validation",
				pattern: /^\/docs\/(.*?)getting-started\/(.*?)validation\/?$/,
				names: ["1","2"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,5],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...1]getting-started/[...3]style",
				pattern: /^\/docs\/(.*?)getting-started\/(.*?)style\/?$/,
				names: ["1","3"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,6],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]advanced/[...1]alter-form",
				pattern: /^\/docs\/(.*?)advanced\/(.*?)alter-form\/?$/,
				names: ["2","1"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,7],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]advanced/[...2]multiple-form",
				pattern: /^\/docs\/(.*?)advanced\/(.*?)multiple-form\/?$/,
				names: ["2","2"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,8],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]advanced/[...4]custom-validation",
				pattern: /^\/docs\/(.*?)advanced\/(.*?)custom-validation\/?$/,
				names: ["2","4"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,9],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...2]advanced/[...5]preprocess",
				pattern: /^\/docs\/(.*?)advanced\/(.*?)preprocess\/?$/,
				names: ["2","5"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,10],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...10]file",
				pattern: /^\/docs\/(.*?)components\/(.*?)file\/?$/,
				names: ["3","10"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,11],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...11]autocomplete",
				pattern: /^\/docs\/(.*?)components\/(.*?)autocomplete\/?$/,
				names: ["3","11"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,12],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...1]text",
				pattern: /^\/docs\/(.*?)components\/(.*?)text\/?$/,
				names: ["3","1"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,13],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...2]password",
				pattern: /^\/docs\/(.*?)components\/(.*?)password\/?$/,
				names: ["3","2"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,14],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...3]email",
				pattern: /^\/docs\/(.*?)components\/(.*?)email\/?$/,
				names: ["3","3"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,15],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...4]number",
				pattern: /^\/docs\/(.*?)components\/(.*?)number\/?$/,
				names: ["3","4"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,16],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...5]range",
				pattern: /^\/docs\/(.*?)components\/(.*?)range\/?$/,
				names: ["3","5"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,17],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...6]textarea",
				pattern: /^\/docs\/(.*?)components\/(.*?)textarea\/?$/,
				names: ["3","6"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,18],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...7]select",
				pattern: /^\/docs\/(.*?)components\/(.*?)select\/?$/,
				names: ["3","7"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,19],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...8]checkbox",
				pattern: /^\/docs\/(.*?)components\/(.*?)checkbox\/?$/,
				names: ["3","8"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,20],
				b: [1]
			},
			{
				type: 'page',
				id: "docs/[...3]components/[...9]radio",
				pattern: /^\/docs\/(.*?)components\/(.*?)radio\/?$/,
				names: ["3","9"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [2,3,21],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
