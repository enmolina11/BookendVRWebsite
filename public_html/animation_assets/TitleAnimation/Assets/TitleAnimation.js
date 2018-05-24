(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.BookEnd2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhOcuIiCgFQgbgCgKgQQgEgIgIgkQgwjii5hGQh0gqhogLQkCgbkFA1QjyAwj7B3QiCA9jtBbQh+AxhlgcQgOgDgSgMIgggTQAJgLACgIIBCAIQB1AKCRg7QBWgjCGg7IDbhgQDlhiDngfIAYgJIgygYIk8iCIgqgRQgYgKgQgLQghgWglgGQgggEgtAHQghAFgzgGQg7gIgggDIAADwIgQACIgtjJIkG0oIgKgzQgCgjAQgZQAQgZAggLQAegJAdAMQAdANARAeIAMAYQBUg2BmAfQBvAhAjBuQAZBNgEBBQgDBDgiBZQBBAMA1AgQA3AhAvA5IgLiaQgKh6gBhdQgBh0AOhjQAKhOAugqQAvgqBNAAQAzAAA3AJQByATAmB0IBLD5QAEALADAFQAEAHAJAGIAAhnQABg9gCgrQgDhKAtgzQAug1BIgDQBDgCBKANQBrAUAlB2IAzCoQAgBlAVBCIgPhbQgKg1gFglQgTiZgGhzQgFhZBEgHQAigDAVAUQAVAUAEAsQALB2AWFWIAEAyIANAEIBEiBQAohLAXg3QAWg1AahQIAriIIAOAEIACA9QABAjgEAYQgUCJgdBjQgkB8g5BiQgQAbAAAaQAAAXANAhQByEHCVDiIA5BTQAkA0AUAgQAQAaAFAxQhAgRg4hAQg7hPgjgjQgODBADDZQACC4APDhIHCqyIiCgUIgMClIgOADIgPgvQgJgbgDgUIgYjIQgNhygGhWQgMi6gOkDIgYm7QgDg7AIgvQAHguAkgNQAjgMAlAcQATAOAdABIDvAFQAhACAMAKQAnAjADAZQACAJgSAPQgSAQgOACQguAEhAADIhwAEIgdABIgfgBIARGAIBkAAQA7gBAoACQAkABAUADQAfADAWAIQAPAFAPASQAOARAAANQAAANgRAQQgPAPgQAGQgTAGgdACIgxABIjVAAIgoJFIGOAAQAeAAAWARQAVARADAbQAEAbgRAWQgSAXgdADQgjAEhBACQhGACgeADQgOAAgMAFQgPAEgFAIQhyC2jEFBQgFAHAAAJQBchSB/gkQBkgdCSgGQALgBAMgFQALgFAHgHQEpkkDtjrQAFgFACgKQACgKgCgHIj6rYQgGgSgLgKIABB5QAABIgCAxQgLFBgQEaQgBAXgIAfIgPA2QgDAHgHAKIgOAPIgOgRQgJgKgBgIIgSiJQgKhQgCg7QgKmLgIpRQAAgpAUg/QADgKANgJQANgKALgBQAIgCALALIATASQAKAKAFAVQARBYA1CDQBHCsAOAqQAaBRAqB3IBEDJIAEAKQAEAFAHAEIAMruQABgzAIggQAMgsAdggQi1g4hagaQifgth3ADQhtACiNgiIjzhFQlPhfjqiRQgXgOgfgaIg0grIAIgNIAaAKQAPAHAKAGQBrBHCGAsQBzAmCQAVQAUACAegKIAygVQAUgJA6geQAwgZAfgLQEghoCjj2QAXgiAggeQAhggAjgSQBagwBWhCQBMg8BQhPQAhghAwgkQAbgVA8gpQBCgvA7BOQBnCHA5C9QAbBZApAfQAoAfBfAEQBAADAuAGQBEALAJBEIATCZIB7gMIhIh2IAPgMICABsIAUgkIgvgWQgagNgRgKQgGgDgFgJIgKgPIASgIQAKgEAIAAQAKABAPAFIAYAIQApANAKgFQAJgFANgqIALgdIAPgBIALAmQAHAXACARQACATAJAMQAJALATAGQA1AQAyAZQAKAFAJAJQALALgCAGQgBAKgJALQgJAKgLAEQgVAIgfAIIg4ANIARA6QAIAgAFAWQACAIgEAMIgGAVIgWgDQgNgDgGgGQgPgMgTgWIgggiIg/AhQgkAUgbALQgHADgOgDIgYgGIADgVQADgOADgHQAKgRAQgZIAfgvIhUAIQgvAEgfAFQgbAEgMgLQgMgKgCgaIgQiiIh+AJQhLAGgzAGQhFAIgmgBQg7gBgygTIgJA6QgFAigCAXQgEAzgVAbQgZAhg2AGIAbAfQANAPALAIQAvAlAWAoQAZAugCA4QgBAMALARQAJAQANAIQBKAvAIAVQAJAVgUBSID0A7IgEASIilAAIgBALQCXBnAGDWQANGhiPGDQgwCDiCAQQgSADgSAQIg+A+QgmAlgaAVQgsAlhDAxIhwBUQguAjiLBtIBgAWQCJAfCuBJQBkArDGBcQBwAxAuAQQBaAfBNAEQAjACBHgIIAbAAIAGAMIgTAPQgMAIgJAEQgoARgwgBQglAAgzgLQhqgXh9gyQhEgciYhIQmWi/mXgGQhvgChPAJQhmAKhUAeQjMBGg8DdQgFAOACADQAWAngXANQgLAGglACIgsAAIhVgBgAgNbiIAqADQAIgoAFghIgGgDIgxBJgAutPYQgcAug2AOIAEAHQABAEACABQECDmBIA/QAQANAjAEQC/AUBwBgQBwBgAwC2IBMAAIg4hYQgfgygYggQgpg3h9ijQhoiIg8hUQgpg3gKgJQgggdguAHQgDABgFgCIgIgDQhNgWg1gpQg7gtgjhJQgSBJgRAegAl7NEQgMA0gLAjQgaBShjA1IHRKLIACgRIgHiAQgEhNAAg0QABh2AFjCIAGk5QAAgSgOgYIg1hWQgig2gTggQgYgqhTieQAFCNAfETQAUD1gcCkQguhhgXiIQgEgTgbjeIgVBZgALjVSID5AVQAOABAMgLIGblRQARgNAHgRQAHgQABgXQAPoqANkVQAFhkAMiUIAVj5IjdgqIANBPQAIAwAAAhQgCJVgHGcQAAA5gGBJIgNCCQgBAKgNAOIgVAXIgSgXQgKgNgCgLQgHgegGguIgLhZInTH1gA2GPwQgdAfgXARQgYASglASIg7AbIIaDpQARAHAUAAIEFAAIlWkyQgIgHgTgEQhagOgsgOQhFgWgpgpIgzA5gA+dFFIASCnQAKBlAGBDQAFBEAGBnIALCrIBdAEQCQAKBkhHQASgMAPgVQAPgVADgTQAdkCiFjHQgxhIhqgbQgtgMgpAAQg1AAguAVgAtskoQg9ADAJBIQAZC0APCJIAfE/QASDFAPB6QAMBnAdAfQAcAdBoAYQAzAMAdgRQAegRAMgyQAJgqAKg9IAPhqIgHgBQgBgigCgRIhGoXQgLhJgcijQgShnhSgIQgrgEguAAQgkAAglACgA16lKQgkABgOASQgOARADAlIAnFmQAWDQAUCXQAJBHAVBlIAlCsQAOBIBJAGQBIAGBEAJQASACAJgGQAKgHACgRIAajFQgwl6gajCQgejIgZiAQgKg0gcgXQgagXg2gDQgjgCgmAAIg7ABgAZOEfQgNBZhKG3IBSgEQAdgBASgQQARgOAKgdQB5lgAClHQAChTgch8QgShZhmgXQgDDsgrEqgA/Jh8QgIAEgIAMQgIAMABAIQAHA2AMBJIAWCBIBFgbQBEgVAAhIIAAgoQAAgXgBgRQgFg3gxgeQgcgRgcAAQgWAAgWAKgEAlMgPsQgIAPgCAKQgDAJAPAXQABADAIABQAGACACgCQAMgRAAgLQAAgMgDgQIgGgdIgJAAg");
	mask.setTransform(260.2,183.9);

	// Layer_34
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXBYQglgkABg0QgBgzAlgkQAkglAzAAQA0AAAlAlQAjAkABAzQgBA0gjAkQglAlg0AAQgzAAgkglg");
	this.shape.setTransform(397.5,62.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFCTIgcgEQgogJgjgVQgPgJgRgPQgZgYgWgfQgUgggLgiIAAAAQAGgcAPgRQAMgSAbgNQANgIAQgHQAmgTAygDQAVgCAfgBIACAAQAnABAlARQAbANAiAVIALAHQAZARALAUIAMAZQAGANADAMQADANgDANQgCAMgGALIgMAaIgFANQgDAFgEADQgHAIgNAGQgJAJgXAIIgTAIQgeANgjACIgXABQgRAAgPgCg");
	this.shape_1.setTransform(405.9,64.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/CvQgngBgkgHIglgIQg1gNgugbQgTgLgZgVQghgdgigqQgegngYgsIAAAAQANgkAagSQARgRAtgLQATgHAXgFQA1gOBFADQAbAAAtgCIABAAQA1ABAyAZIBUAoIAQAJQAmATAPAaIASAgQAJARAEAOQAFATgFASQgEAQgLAOQgMAQgIAQIgIARQgDAGgHADQgJAHgWAFQgKAHgmAGQgNAEgPADQgkAJgpAAIgMAAg");
	this.shape_2.setTransform(414.4,66.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABLDKQgxgEgsgKIgvgLQhCgSg6ghQgXgNghgbQgogjgvgzQgpgxgjg0IAAAAQATgtAlgTQAYgQA9gJQAZgGAfgDQBDgJBZAJQAhACA6gDIACAAQBAACBAAgQAoATBEAdIAVAJQAzAWASAeIAYAoQANAVAFASQAHAYgIAXQgGATgQARQgRAUgKASIgLAVQgEAIgKADQgMAGgeADQgMAGgzAEIglAGQgfAEgjAAQgXAAgZgCg");
	this.shape_3.setTransform(422.9,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABYDnQg8gIg1gMQgdgHgbgIQhOgYhGglQgcgQgoghQgwgog7g+Qgzg6gwg8IAAAAQAZg1AwgUQAfgQBNgHQAggEAmgBQBSgEBsAPQAnAEBHgEIACAAQBNACBOAnQAvAXBUAgIAaALQBAAYAWAkIAdAuQARAaAGAVQAKAegLAbQgIAWgVAVQgXAWgNAWIgMAaQgGAIgMADQgOAGgnABQgNAEhDADIgtAEQgZACgaAAQgqAAgtgGg");
	this.shape_4.setTransform(431.3,70.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABlEFQhHgMg9gPIhCgSQhbgdhRgrQghgRgvgnQg4guhIhJQg+hCg7hEIAAgBQAfg9A7gVQAlgQBegEQAmgDAuABQBgABCAAUQAsAGBVgEIADAAQBZADBbAtQA1AbBlAkIAfALQBOAcAZAoIAjA2QAVAeAHAYQAMAjgOAhQgKAZgaAXQgcAagPAZIgPAeQgHAKgPADQgRAEgvAAQgPAChQACIg2ACIggAAQg+AAhEgKg");
	this.shape_5.setTransform(439.8,72.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AByEjQhSgPhGgSQgngLgkgLQhoghhdgxQglgUg3gsQg/g0hUhTQhIhLhHhNIgBAAQAmhGBFgWQAsgPBvgCQAsgBA1ADQBvAFCTAaQAyAJBjgGIACAAQBmAEBpA0QA8AeB1AoIAkANQBbAdAdAuIApA8QAYAkAIAaQAOApgQAlQgMAdgfAbQgiAdgRAcIgSAhQgIAMgRACQgTAEg4gCQgQABhfAAIg/AAIgOAAQhRAAhbgQg");
	this.shape_6.setTransform(448.3,74.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIXFZQgXgCivgCQhigBhxgVQiPgdhwgkQh1gmhog3QhYgui4ixIimipQAshOBQgXQAygOCAAAQCcAAD3AvQA4AKBwgGQBzAEB4A8QBMAmCmA0QBnAhAhAyQAOAWAhAtQAbApAKAdQAdBThSBDQgnAhgUAfQgOAdgGAIQgJANgUADQgKABgRAAQgWAAglgCg");
	this.shape_7.setTransform(456.8,76.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},52).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer_33
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhuBOQguggAAguQAAgsAughQAuggBAAAQBBAAAuAgQAuAhAAAsQAAAuguAgQguAghBAAQhAAAguggg");
	this.shape_8.setTransform(375,107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AALCYQgrAAg8gPQgZgIgYgLQgRgIgPgKQgKgOgIgVQgJgYgBgVQgCgwAjgnIAVgWIAEgEIAKgJQAQgOANgHQANgIANgFQAQgFATgDIAhgEIASgCQAbgBAhALQAjAKAdAPIAHADQAQALAPAOQAWAVAGAOIADALQACAHgBALIAAAMQAAALgDALQgCAPgHANQgEAHgGAGIgNAOQgNAMgJAMIgCACQgJAPgKAHQgHAIgJAFQgRAJgZAIQgdAIgZAAg");
	this.shape_9.setTransform(376.4,100.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVDBQguAAhVgQQgggIgegLQgXgIgUgJQgJgSgKgcQgLgfgBgZQgFg8AqgzIAYgdIAFgGIAMgNQASgVANgJQAPgMAQgGQATgIAZgEIApgHIAWgFQAdgDAuAPQAsANAlARIAIAEQAUALAVATQAeAcAGANQAEAHAAAHQACAIgBAOIgBAQQgBAOgDAOQgDATgJAQQgFAIgIAIIgRAQQgRAQgIARIgCACQgHAXgIAIQgHALgLAJQgSAMghALQglAMgdAAIgCAAg");
	this.shape_10.setTransform(378,93.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfDrQgvgBhvgSQgngHglgLQgcgHgagJQgJgVgLglQgMgmgCgbQgHhKAwg+IAbgkIAGgIIANgQQAVgdAOgLQARgPASgJQAWgKAfgFQAagEAWgGIAcgIQAfgEA6ASQA1ARAtARIAKAFQAYAMAaAYQAoAjAGAMQAEAIABAJQABAJgCARIgCAUIgEAjQgEAVgLATQgGAKgLAKIgUASQgWATgGAWIgCACQgFAfgIAKQgGAPgMALQgTAPgqAPQgsARgiAAIgDAAg");
	this.shape_11.setTransform(379.5,87.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AApEVQgygBiIgTQgtgIgsgKQgigHgegJQgJgXgOgtQgNgugDgeQgIhXA1hKIAggqIAGgKIAOgUQAZgkAOgNQASgUAWgKQAYgNAlgFQAegFAagIIAfgLQAjgHBGAXIB0AmIAKAFQAcAOAgAcQAxAqAGAMQAFAIAAALQABAKgCAVIgDAXIgFApQgFAagNAVQgHALgNAMIgXAVQgbAXgFAaIgBACQgEAngGALQgGATgOAOQgTASgyATQg1AVgmAAIgEAAg");
	this.shape_12.setTransform(381,80.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAzE/Qg0gBihgVQg1gIgzgJIhKgPIgXhQQgQg0gDgiQgLhjA9hWIAigyIAHgLIAQgYQAbgrAOgPQAVgYAXgNQAcgOAqgHQAjgFAdgKIAkgOQAlgJBTAbICEArIANAFQAfAPAlAgQA7AxAGAMQAGAJAAAMQABALgDAZIgDAaIgGAvQgGAegPAZQgIAMgPANIgcAXQgfAbgDAgIgCACQgBAugGANQgFAVgPARQgVAVg6AYQg+AZgpAAIgFAAg");
	this.shape_13.setTransform(382.5,74.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA9FpQg3gBi6gWQg7gIg6gKIhVgOIgYhbQgRg7gEglQgNhxBDhgIAlg6IAIgMIASgcQAdgyAPgRQAWgcAbgPQAegQAwgIQAogHAggMIAogQQAogMBfAfQBSAbBEAVIAOAGQAjAQAqAkQBEA5AGAKQAHALAAAOQABALgEAdIgEAeIgHA0QgHAigRAcQgIAOgRAOIggAaQgkAegCAlIgBACQAAA2gEAOQgFAZgRAUQgWAYhCAcQhGAdgtAAIgGAAg");
	this.shape_14.setTransform(384,67.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABHGUQg5gCjUgYQhCgIhBgJIhfgOQgHgggThGQgShCgFgoQgPh+BJhsQAUgdAVgjIAJgOIATggQAgg5AQgTQAYggAdgRQAhgTA1gJQAtgHAjgOIAtgUQArgNBrAjQBbAfBMAVIAPAGQAnASAwAoQBNBAAGAKQAIALAAAQQAAAMgEAhIgFAhIgIA6QgHAmgTAfQgKAPgTAQIgkAdQgoAhAAAqIgBACQABA+gDAPQgEAdgTAXQgWAbhLAgQhOAigxAAIgHAAg");
	this.shape_15.setTransform(385.6,60.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABRG9Qg7gCjtgZIiRgRIhqgNQgGgkgVhNQgThKgGgrQgRiKBPh4QAVggAYgnIAJgQIAUgjQAkhBAPgVQAagkAggTQAkgVA7gKQAxgIAngQIAxgWQAtgQB4AnQBkAiBUAXQAIACAJAFQAqASA2AtQBWBHAGAJQAJANAAARQAAANgFAkIgGAlIgIBAQgJAqgVAiQgKAQgWASQgaAUgNALQgtAlABAuIAAACQADBHgCAQQgEAhgUAZQgYAehTAkQhWAmg1AAIgIAAg");
	this.shape_16.setTransform(387.1,54.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjpHLIkTgdQgGgngWhVQgVhRgGguQgUiYBWiDQAbgqAfg2IAVgnQAnhIAQgWQAcgpAigVQAmgXBBgLQA2gJAqgSIA1gZQAxgSCDAsQBuAlBcAXQAzARBIA7QBgBPAGAIQAKAOAAATQAAAOgHAnQgHAwgIA/QgJAugXAkQgLASgZAUIgrAhQgyApADAzQAFBQgBASQgDAkgWAcQgZAhhbApQheAqg5AAQgxAAkcgdg");
	this.shape_17.setTransform(388.6,47.7);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},46).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(5));

	// Layer_32
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhrBrQgsgsAAg/QAAg+AsgsQAtgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgtgtg");
	this.shape_18.setTransform(427.5,167.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AABC3IgEgBQgQgBgYgGIgfgIQgtgOgagSIgVgPQgUgNgJgKQgbgZgRgdQgMgRgFgOQgGgLgCgIQgCgGABgGQABgHAFgGQAKgRALgQQAIgOAQgRQASgWAagSIAOgJQAZgPAagJIAYgIIAOgEIADgBQAPgDAYABIAVAAIAUACQANABAWAGQAUAFAOAGIAfAMIAgAPQALAHARAOIAFAFQARAQAPARQAMAPANAWIAIARIAFAKIAHAOIADAHQADAJACAJQABAJgBAKIAAACQgBALAAALIABAQQAAAGgDAFQgEAJgKAHQgSASgaAPIgVALIgMAFQgiAQgzAFIg4AEIgegCg");
	this.shape_19.setTransform(419.2,161.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AB1DeIhKgBQgZgDgRgDIgGgBQgRgCglgKQgUgEgWgHQhAgTghgUIgdgSQgfgSgKgKQgngdgdglQgUgWgHgPQgLgOgEgKQgEgJADgHQACgIAKgIIAkglQANgPAagVQAcgZAmgVIAUgJQAkgSAkgIIAhgHIATgFIAEAAQASgEAjAEIAbADIAcAFIABAAQAPACAgAKQAcAJARAGIAqASQAZALASAGQANAHAbAXIAGAFQAXAVAVAVQARATATAfIANAVIAIANIAKARIAFAKQAGAMADAMQACAMgCAPIgBACQgBAOACAPIACAWQAAAJgFAGQgGAJgRAGQgfARgmANIggAJIgQACQglAIg6AAIgYAAg");
	this.shape_20.setTransform(411.1,154.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACUECIhegHQgggEgUgEIgBAAIgHgCQgUgEgxgNIg0gOQhVgYgngXIgjgUQgrgWgMgLQg0gigngsQgbgcgLgPQgQgSgFgMQgGgLADgIQAEgKAOgKIA1goQARgRAkgZQAmgcAygXIAagKQAvgTAugIIAqgHIAYgFIAGAAQAVgDAtAHIAjAFIAkAHQARADAqAPQAlAMAUAIIA0AXQAhANAWAHQAQAHAjAeIAHAGQAeAbAbAZQAVAWAaApIARAYIALARIAOAVIAHALQAJAPADAPQADAPgDAUIAAACQgCASACATIAEAbQABAMgHAGQgJAKgXAGQgrAPg0AKIgqAHIgVAAIghABQgxAAhGgGg");
	this.shape_21.setTransform(402.9,147.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFsE0QhCgEh4gOIhwgMQgpgHgXgFIgBAAIgJgDQgWgEg9gRIg/gRQhogegugYIgrgXQg1gagOgLQhBgogxgzQgkgggNgSQgVgVgHgOQgIgNAFgKQAEgLAUgLQAigVAigYQAWgRAugdQAwggA+gZIAfgLQA7gUA4gIQAdgDAWgEQAQgCANgDIAHAAQAZgCA3AKIArAHIArAKQATAEA0ATQAuAPAWAKIA/AbQApARAZAGQASAIAsAlIAJAHIBGA+QAYAZAhAxIAVAeIAOAUIATAYIAJANQALASAEARQAEATgEAYIAAADQgDAVADAXIAGAhQABAOgJAIQgLAKgeAGQg3ANhBAIIg1AFIgZgDg");
	this.shape_22.setTransform(394.7,141.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AGsFgIjcgfIiDgRQgwgJgbgGIgBAAIgKgEQgZgFhJgUIhKgVQh8gjg0gaIgygZQhBgfgPgLQhNgtg9g6QgrgmgRgUQgZgYgIgPQgKgPAFgMQAGgMAYgMQAqgYAqgZQAagTA5ghQA5gjBLgbIAlgNQBGgVBCgHQAigDAagEIAigFIAIAAQAcgBBCAMIAyAKIAyAMIABAAQAUAFA/AXQA2ATAZAMQAcANAuASQAwAUAeAGQAUAIA1AsIAJAJIBTBIQAdAcAoA5QALARAOASIARAXIAWAcIALAPQAOAVAFAUQAFAWgFAcIAAADQgEAZAEAbIAIAnQACAQgLAJQgOALglAFQhDAMhOAFIhAADIgdgGg");
	this.shape_23.setTransform(386.6,135.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AHrGMQhYgRimgbIiVgWQg3gKgfgIIgBgBIgMgDIhwgfIhVgXQiQgog6gdIg6gcQhMgjgQgLQhagzhIhAQgzgsgTgVQgegcgKgQQgMgSAHgNQAHgOAcgNQAygZAygcQAfgUBDglQBDgnBWgcIAsgOQBRgXBMgGQAngDAegEIAogFIAIgBQAfAABOAQIA4AMQArAJAPAFIABAAQAWAGBJAcQA+AVAcAOQAgAPA1AVQA3AXAiAGQAWAIA/A0IAKAJIBgBSQAhAgAuBCQANATAQAUIAVAaIAZAgIANARQARAYAGAWQAGAZgGAiIgBADQgEAdAGAfIAJAsQACATgNAIQgPANgtAEQhQALhaACIhLABIgigJg");
	this.shape_24.setTransform(378.4,129.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AJSHDIgngLQhjgYi9ghIiogcQg/gMgigJIgBgBIgOgEIh+gkIhfgaQilgthAgfIhBgeQhXgogSgLQhng4hShIQg7gxgWgWQgjgggMgSQgOgTAIgPQAIgPAhgOQA7gbA5gfQAkgVBNgpQBNgqBigfIAxgOQBdgZBVgFQAtgDAigEIAtgGIAJAAQAiAABZATIBAAOQAwALARAGIABAAQAYAHBTAgQBHAZAeAPQAjASA8AXQBAAaAmAGQAYAJBHA7IAMAKIBtBbQAkAkA1BKQAPAWASAXIAYAcIAeAkIAPATQATAaAHAZQAHAdgHAmIgBADQgFAhAHAjIALAyQACAVgPAJQgRANg0AEQhcAJhoABIhUgCg");
	this.shape_25.setTransform(370.3,124);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AL1H1IhfgEQgTgHgYgHQhugfjUgnIi6ghQhHgOgmgKIgBgBIgQgFQgegKhugeIhqgdQi4gzhHghIhJghQhigsgTgLQh0g9hdhPQhDg3gYgYQgogigOgUQgQgWAKgQQAJgQAmgQQBCgdBBghICAhDQBWgtBvghIA3gQQBogaBfgFQAygCAmgEIAygGIAKAAQAmABBjAVIBHARQA2AMATAHIABAAQAZAIBeAlQBPAcAhARQAnATBDAaQBHAdAqAGQAaAJBRBCIANALIB5BmQApAmA8BUQAQAYAVAZIAbAgIAhAnIARAUQAWAeAIAbQAIAggIArIgBAEQgGAkAIAnQAEAWAJAhQADAYgRAKQgUAOg7ADQhTAGhcAAIguAAg");
	this.shape_26.setTransform(362.1,118.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ANEIkIhqgFQgVgJgagIQh5gmjrgtIjNgnQhPgQgpgLIgCgBIgQgGQghgKh6giIh1ggQjMg5hNgiIhQgkQhtgwgVgMQiBhChnhWQhLg9gcgZQgsgmgPgVQgSgYAKgRQAKgSArgRQBLgfBIgjICPhJQBggwB6gjIA9gRQB0gbBpgFQA3gBAqgFQAfgCAYgEIALAAQApACBuAYIBPATQA8AOAUAHIAAAAQAcAJBoApQBYAgAkATQApAVBLAdQBPAfAtAHQAdAJBZBJIAOAMICHBwQAsApBDBdQASAaAXAcIAeAiIAmArIATAWQAZAhAIAeQAJAkgJAuIgBAFQgHAnAJArIAOA9QAEAagTAMQgWAOhCADQhCADhHAAQg1AAg4gCg");
	this.shape_27.setTransform(354,112.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AOTJUIh1gIQgXgKgdgKQiDgskCg0IjggsQhWgRgtgNIgCgBIgSgGQgjgMiGgmIiAgjQjgg9hTglIhXgmQh5g1gXgMQiMhHhzheQhShCgfgaQgxgpgRgXQgUgaALgTQAMgTAvgTQBTggBRgmICdhOQBqgzCGgmQAigJAhgIQB+gdB0gEQA9gBAtgFQAigDAagEIAMABQAsACB5AbIBWAVQBCAQAVAIIABAAQAeAKByAuQBgAjAnAUQAtAXBSAgQBWAiAyAHQAfAJBiBRIAPANICTB5QAxAtBJBmQAUAcAaAeIAhAmIApAuIAVAYQAcAkAJAgQAKAngKA0IgBAEQgHArAJAvQAGAbAKAoQAEAdgVAMQgYAPhJACQg2ACg3AAQhPAAhTgEg");
	this.shape_28.setTransform(345.8,106.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("APiKDIiAgKQiIg9lXhGIjzgyQhggUgwgOIgUgHQglgNiSgpIiKgmQj1hDhZgnQjbhegggQQiZhNh9hkIh8hjQg2gtgTgYQgWgdANgUQAMgVA0gTQBcgiBYgpQA2gZB2g6QBzg3CTgnQCxgwCfgEQBCgBAxgFQAlgDAcgEIANAAQAwADCDAfIBdAXQBJASAXAIQAfALB9AyQBoAmAqAWQAwAaBZAiQBeAlA2AHQAhAJBsBZICwCQQA0AxBRBuQAVAfAcAgIAkApIAuAyIAXAaQAeAmAKAkQALAqgLA4IgBAFQgIAuAKAzIASBJQAFAfgXANQgbAPhQACIhNAAQhpAAhygGg");
	this.shape_29.setTransform(337.7,100.9);

	var maskedShapeInstanceList = [this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},40).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(9));

	// Layer_31
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag4A4QgXgXAAghQAAggAXgXQAYgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAXghABQgggBgYgXg");
	this.shape_30.setTransform(96,213.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhJBOQgfggABguQgBgtAfghQAfgfAqAAQArAAAeAfQAfAhAAAtQAAAugfAgQgeAggrAAQgqAAgfggg");
	this.shape_31.setTransform(93.5,210.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhbBkQglgpAAg7QAAg5AlgqQAmgpA1AAQA1AAAmApQAmAqAAA5QAAA7gmApQgmApg1AAQg1AAgmgpg");
	this.shape_32.setTransform(91,207);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhsB5QgtgyAAhHQAAhHAtgzQAtgxA/AAQBAAAAsAxQAuAzAABHQAABHguAyQgsAzhAAAQg/AAgtgzg");
	this.shape_33.setTransform(88.6,203.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ah+CPQg0g7AAhUQAAhTA0g8QA1g7BJAAQBKAAA0A7QA1A8AABTQAABUg1A7Qg0A8hKAAQhJAAg1g8g");
	this.shape_34.setTransform(86.1,200.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiPClQg7hEAAhhQAAhgA7hFQA8hEBTAAQBUAAA7BEQA8BFAABgQAABhg8BEQg7BFhUAAQhTAAg8hFg");
	this.shape_35.setTransform(83.6,197.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AihC7QhChNAAhuQAAhsBChPQBEhNBdAAQBeAABCBNQBEBPAABsQAABuhEBNQhCBOheAAQhdAAhEhOg");
	this.shape_36.setTransform(81.2,194.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiyDQQhKhWAAh6QAAh6BKhXQBKhVBogBQBpABBJBVQBLBXAAB6QAAB6hLBWQhJBYhpAAQhoAAhKhYg");
	this.shape_37.setTransform(78.7,191.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AjEDmQhRhfAAiHQAAiGBRhgQBShfBygBQBzABBRBfQBRBgAACGQAACHhRBfQhRBhhzAAQhyAAhShhg");
	this.shape_38.setTransform(76.2,188.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AjVD8QhYhoAAiUQAAiTBYhqQBZhnB8AAQB9AABYBnQBZBqAACTQAACUhZBoQhYBph9AAQh8AAhZhpg");
	this.shape_39.setTransform(73.7,185.4);

	var maskedShapeInstanceList = [this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},47).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(4));

	// Layer_30
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgyAyQgUgVAAgdQAAgdAUgVQAVgUAdAAQAeAAAUAUQAVAVAAAdQAAAdgVAVQgUAVgeAAQgdAAgVgVg");
	this.shape_40.setTransform(121.1,260.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUBwIgOgCQgJgFgKgMQgKgLgIgNQgRgbgBgVQAAgJACgHQACgKAGgLIAHgQIALgWIAAgBQAOgbAWgLQAKgGALgEQANgFAMgBQAMgEAHADIAJADQAIACAFAHIABABQAFAHAEAIQAIANAEAQQAFAQAAARQABAZgJAWIgMAWIgFAHIgKAPQgOARgRANIgJAGQgGAEgGABIgOAAIgIAAg");
	this.shape_41.setTransform(120.6,255.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfCfQgLgGgPgRQgMgOgMgSQgZgngBgXIAAgBQAAgLADgKQADgOAJgNQAEgIAEgNQAFgJAGgWIABgBQAPgoAYgRQAMgLAMgHQAQgLAPgFQAQgJAHACIAMAAQALACAGAJIACADQAGAJAFALQAIARAGAWQAGAWABAWQABAjgLAcIgOAeIgGAKIgLAVQgNAYgRAYIgIALQgHAJgHACQgLAEgRACIgJABIgJgBg");
	this.shape_42.setTransform(120,249.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag8CzQgPgSgPgXQghgygCgZIAAgBQAAgOADgMQAFgSALgQQAGgJAFgRQAEgLAHgcIAAgDQAQg0AbgYQAOgPAOgKQATgRAQgJQAWgPAGABQADgBAMAAQAOABAIAMIACAEQAHALAFAOQAKAVAHAcQAHAcABAbQACAsgMAiIgRAoIgGANIgMAbIgdBCQgEAJgEAGQgHANgIAFQgNAGgWAFIgWADQgNgIgTgWg");
	this.shape_43.setTransform(119.5,244.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhADeQgRgUgSgdQgqg+gDgaIAAgCQAAgQAFgPQAFgVAPgTQAHgMAFgUQAEgLAHgkIABgDQAQhAAdggQAQgSAQgPQAWgXATgMQAagVAFAAQADgCAQAAQARAAAJAOIADAGQAHANAHASQAJAZAJAgQAIAjACAhQADAzgOAqIgTAwIgHAPIgNAiQgNAkgPAwQgDAMgFAIQgHASgJAGQgOAJgcAIIgaAEQgPgJgXgbg");
	this.shape_44.setTransform(119,239.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhDEKQgTgYgXghQgyhKgDgcIAAgCQAAgUAFgRQAHgXARgXQAJgNAFgYQAEgMAIgsIABgEQAQhNAgglQASgYASgRQAYgdAWgQQAegbAFgBQADgDATgBQAUgBAKARIAEAIQAIAPAHAUQALAdAJAnQAKApACAlQAEA9gPAxIgWA5IgIARQgIAWgFASQgNArgOA7QgEAOgEALQgHAWgKAIQgPAMghALIgfAHQgRgLgbggg");
	this.shape_45.setTransform(118.4,233.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhGE1QgWgbgagmQg7hVgDgeIAAgCQAAgXAGgUQAHgaAUgbQAKgNAGgdQAEgNAJgzIAAgFQARhZAjgsQAUgcATgVQAbgiAYgUQAjghAFgCQACgEAWgCQAYgBALATIAEAJQAJASAIAXQAMAhAKAtQAMAuACArQAFBGgRA3IgZBCIgIAUQgJAZgFAVQgMAxgOBHQgDARgFANQgHAbgLAJQgQAPgmANIgkAKQgTgNgeglg");
	this.shape_46.setTransform(117.9,228.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhKFgQgYgegdgrQhDhggEggIgBgDQAAgaAHgVQAJgfAXgdQAMgPAGggQAEgPAIg6IABgGQARhlAmg0QAWgfAUgZQAggoAZgXIArgrQADgFAagCQAagCAMAWIAFALQAKATAJAbQAMAlAMAyQAMA1AEAwQAFBOgTA/IgbBKIgJAXQgKAdgEAXQgNA3gMBTQgDAUgFAPQgHAfgMALQgSASgrAQIgoALQgVgNgjgrg");
	this.shape_47.setTransform(117.4,223.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhNGLQgbghghgwQhLhsgFghIAAgEQAAgcAIgYQAKgiAZggQANgRAHgkQAEgPAJhCIAAgHQAShyAog6QAYgkAWgcQAjguAbgbIAwgxQACgGAdgDQAegDANAZIAGAMQAKAWAKAeQANApANA4QAOA6AEA2QAGBWgVBHIgeBSIgJAZQgLAhgEAaQgMA+gMBeQgDAWgEARQgIAkgNANQgTAVgwASIgtAOQgWgPgngwg");
	this.shape_48.setTransform(116.9,217.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhQG3Qgeglgkg0QhTh4gGgkIAAgDQAAggAIgaQALglAdgjQAOgSAHgqQAEgPAKhJIAAgHQASh/ArhBQAagoAYggQAlgzAegfQAwgyAEgGQACgHAggEQAhgDAOAbIAHAOQALAYAKAhQAPAtAOA9QAPBBAEA6QAHBggWBNQgFAQgcBLIgKAcQgLAkgFAdQgLBEgLBpQgDAagFATQgIAogNAPQgVAXg1AWIgxAQQgZgQgqg1g");
	this.shape_49.setTransform(116.3,212.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhUHiQgggngog6QhbiEgHglIAAgEQAAgjAKgcQAMgoAfgnQAQgTAHgtQAEgQAKhRIABgIQASiLAthIQAcgsAagkQAog5AhgiQA0g4ADgHQACgIAkgFQAkgEAPAdIAIAQQALAaAMAlQAOAxAQBDQAQBGAFBAQAIBogYBVQgFARgeBSIgLAeQgMAogFAgQgLBLgKB0QgDAcgEAWQgJAtgOAQQgWAag6AYIg2ATQgagSgvg6g");
	this.shape_50.setTransform(115.8,207);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhXINQgjgqgrg/QhkiPgHgnIAAgFQAAglAKgfQAOgrAigqQARgVAIgxQADgRALhYIAAgJQATiYAwhOQAegxAcgnQArg+AigmQA6g/ACgIQACgJAngEQAngGARAgIAIASQAMAcAMAoQAQA1ARBIQARBNAFBFQAJBwgZBcIgmBsIgLAhQgNArgFAjQgLBRgJCAQgDAfgEAYQgJAxgPASQgYAdg/AbIg6AVQgcgUgzg/g");
	this.shape_51.setTransform(115.3,201.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhbI5QglgugvhDQhsibgHgpIgBgFQAAgoAMgiQAOguAlgtQASgWAJg1QADgSALhfIABgKQATikAzhVQAgg1AdgrQAuhEAlgqQA9hEACgJQACgKAqgGQArgGARAjIAJATQANAeANArQARA5ASBOQATBTAFBKQAKB5gbBjQgGAUgjBhIgMAjQgNAvgFAlQgLBYgICLQgDAigEAaQgJA2gQAUQgZAfhEAeIg/AXQgegVg3hEg");
	this.shape_52.setTransform(114.8,196.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ai4HrQh9izAAgkQAAgrAMgkQAPgxAogwQAUgXAJg6QADgTALhmQATi5A3heQBYiWBBhJQBChKACgLQACgLAtgGQAtgGATAlQATAlASA+QASA9ATBUQA2DpguCqQgGAWglBoQgaBJgGA3QgKBegHCXQgJBwgYAhQgbAihJAgIhDAaQg3glh+i0g");
	this.shape_53.setTransform(114.3,190.9);

	var maskedShapeInstanceList = [this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},34).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).wait(13));

	// Layer_29
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAVAAAcQAAAdgVAVQgVAVgdAAQgcAAgVgVg");
	this.shape_54.setTransform(67.3,291);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgBBPQgLgEgKgIQgSgMgOgUQgWgfgDgmIAAgBQACgMAGgLQAGgKAFgGIAIgFIAFgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAPgIATAHIASAGQAVAMAPAMQAHAGAGANQAMARAGAWQAEAQAAAPQAAAUgEALQgCAFgDADQgEADgFACQgEAFgHgBQgJAFgLAAQgPAAgRgJg");
	this.shape_55.setTransform(66.4,288.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AA0B0QgXAEggggQgMgJgLgNQgSgTgPgbQgYgogFgyIAAAAQAEgQAJgNQAJgMAIgFIAKgDQAEgBADABQACgBADADQAOgDAVAUIASANIAkAnQAHAIAHASQALAWAGAeQAEAWABASQAAAcgEALQgDAGgGACQgGACgFAAIgEACQgEAAgFgFg");
	this.shape_56.setTransform(65.6,285.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ABDCfQgFADgJgNQgXgFgjgwQgMgOgMgRQgTgbgQghQgZgzgIg7IAAgBQAGgSAMgQQANgOAKgEIANgBQAEgBAEADQACAAAEAGQAPADAUAfIAUAVQAWAkAOASQAGAJAHAZQAMAZAGAoQAEAaABAWQABAkgFALQgEAHgIABIgHAAIgIgBg");
	this.shape_57.setTransform(64.8,282.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("ABFDGQgFACgLgUQgYgOgkhAQgNgRgNgXQgTgigSgnQgag+gKhFIAAgBQAIgWAPgRQAQgRAMgCIAQAAQAFABAFAEQACABAEAIQAPAJAWArIAUAdQAYAvANAVQAFALAHAeQAMAfAGAwQAFAfABAaQABAsgFALQgFAIgKAAIgEAAQgIAAgHgEg");
	this.shape_58.setTransform(64,280.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABeD1QgNAAgJgHQgFABgMgbQgZgWgnhQQgOgWgNgcQgUgogSgvQgchIgNhPIAAgCQAKgYATgTQATgTAOgCIATACQAGACAFAGQACACAFALQAPAOAXA3IAUAkQAZA8ANAYQAFAMAHAkQALAkAHA4QAFAlABAdQACAzgGALQgGAJgLAAIgBAAg");
	this.shape_59.setTransform(63.1,277.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("ABkEfQgPgBgKgJQgGABgNghQgbgfgphgQgOgbgNghQgWgvgSg1QgehTgPhaIAAgBQAMgbAWgWQAXgVAQAAIAVADQAIADAFAIQACADAFANQAPAUAZBDIAUAsQAaBIAMAaQAFAOAIAqQAKApAIBAQAFAqABAgQACA8gGALQgGAIgMAAIgDAAg");
	this.shape_60.setTransform(62.3,275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("ABpFKQgQgCgMgMQgGAAgPgoQgbgngrhwQgOgfgOgmQgWg3gVg7QgfhegRhjIgBgCQAOgeAagYQAbgXARABQASADAHACQAIADAGAKQADAEAEAQQAQAZAaBPIAVA0QAbBUALAdQAFAPAHAwQAKAuAIBJQAGAuABAkQACBEgGALQgHAJgNAAIgFAAg");
	this.shape_61.setTransform(61.5,272.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABvF0QgTgCgMgOQgHgBgQguQgbgxguh/QgOgkgPgrQgXg9gWhDQgghogUhtIgBgCQAQghAdgaQAegaAUACQAUAEAIADQAJAEAGAMQADAFAEATQARAeAcBbQAKAgALAcQAbBfALAhQAEAQAIA2QAKAzAIBRQAGA0ABAnQADBLgHAMQgIAJgNAAIgHgBg");
	this.shape_62.setTransform(60.6,269.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AB1GfQgVgEgOgPQgHgDgRg0Qgcg5gwiQQgPgogQgvQgYhFgWhKQgihygXh3IAAgCQASgkAggcQAigcAWADQAWAFAIAEQAKAEAGAOQADAFAGAWQARAkAcBnIAWBDIAmCPQAEARAIA9QAKA4AJBZQAFA5ACAqQADBUgHALQgIAKgOAAIgJgBg");
	this.shape_63.setTransform(59.8,267.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AB6HJQgXgEgPgSQgHgDgSg7QgehCgxifQgQgtgQg1QgZhLgXhRQgkh8gZiCIAAgCQAUgnAjgeQAlgeAYAEQAZAGAJAEQAKAGAGAQQAEAGAGAYQARAqAeBzIAWBKQAeB4AIAmQAEATAIBDQAKA8AJBhQAGA/ACAtQADBcgIAMQgIAKgOAAIgMgCg");
	this.shape_64.setTransform(59,264.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("ACAH0QgZgFgQgUQgHgFgUhBQgfhKgziwQgRgxgRg6QgZhSgYhYQgliHgciLIAAgDQAWgqAmgfQApghAaAFQAbAHAKAFQAKAHAHASQAEAHAGAaQASAwAfB/IAWBSQAfCDAIApQAEAUAIBJQAJBCAKBpQAGBEACAxQAEBkgJALQgJALgPAAIgNgCg");
	this.shape_65.setTransform(58.2,261.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ACGIfQgbgHgSgWQgHgFgVhIQgfhSg2jAQgRg2gSg+QgahagZheQgmiSgfiVIAAgDQAYgtAqgiQAsgiAcAFQAdAIAKAHQALAHAJAUQADAHAHAeQASA1AgCLIAXBZQAgCQAHArQADAWAIBPQAKBHAKBxQAGBJACA0QAEBsgIAMQgKALgQAAQgHAAgIgCg");
	this.shape_66.setTransform(57.3,259.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("ACLJJQgdgHgSgYQgIgGgWhOQgghcg5jPIgjh+QgbhhgahlQgoicghifIgBgDQAagwAugkQAvglAeAHQAgAJAKAHQANAIAIAWQAEAIAIAgQASA7AhCXIAXBhQAhCbAGAuIAMBtQAJBMAKB5QAGBOADA4QAFB0gKALQgKALgRAAQgIAAgJgCg");
	this.shape_67.setTransform(56.5,256.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("ACRJ0QgfgIgUgbQgHgHgYhVQghhkg7jfIgkiHIg3jUQgqimgjipIgBgEQAcgzAxgmQAzgnAgAIQAiAKALAIQANAJAJAXQAEAJAIAjQATBBAiCiIAYBpQAhCnAGAxIALB1QAJBQALCCQAGBTADA7QAFB8gKALQgLAMgSAAQgIAAgKgCg");
	this.shape_68.setTransform(55.7,254);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ACXKfQghgJgVgdQgIgIgZhbQgihtg9jwIgliQIg5jiQgriwgmizIgBgEQAeg2A0goQA3gqAiAJQAkALAMAJQAOAKAKAZQAEAKAIAmQATBGAkCuIAXBxQAjCzAFA0IALB8QAJBVALCKQAHBYACA/QAGCDgKAMQgMAMgTAAQgJAAgLgCg");
	this.shape_69.setTransform(54.8,251.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ACdLJQgjgKgXgeQgIgKgahhQgjh1g/kAIgniaIg6jwQgti6goi+IgBgEQAgg4A3gqQA7gsAkAKQAlAMANAJQAPALAKAbQAEALAJAoQAUBMAkC6IAYB4QAkDAAEA2IALCEIAUDsQAHBdADBCQAGCMgLAMQgMAMgUAAQgJAAgMgDg");
	this.shape_70.setTransform(54,248.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ACiL0QglgLgYghQgIgKgchoQgkh+hAkQIgpijIg8j+QgujFgrjHIAAgEQAig8A6gsQA+guAmALQAnAMAOALQAQAMALAcQAEAMAJArQAUBRAmDGIAYCAQAlDMAEA5IAKCLIAVD6QAHBiADBFQAGCUgLAMQgNANgUAAQgLAAgNgDg");
	this.shape_71.setTransform(53.2,246.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("ACoMeQgngLgZgkQgJgLgdhuQgkiHhDkfIgqitIg+kLQgvjQgtjRIgBgFQAkg+A+gvQBBgwAoAMQApAOAPALQARANALAeQAFANAJAtQAVBXAmDSIAZCIQAmDXADA8IAKCTIAUEHQAIBnADBJQAHCbgMAMQgNAOgWAAQgLAAgOgEg");
	this.shape_72.setTransform(52.4,243.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ACuNJQgqgNgaglQgJgMgeh1QgliPhGkvIgqi3IhAkZIhhm1IgBgFQAmhBBBgxQBFgzAqAOQAsAOAPAMQASAOAMAgQAEAOALAwQAUBcAoDeIAZCQQAnDjACA/IAKCaIAVEUQAHBsAEBMQAHCkgMAMQgOAOgWAAQgMAAgPgEg");
	this.shape_73.setTransform(51.6,240.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AC0NzQgsgNgbgoQgYgiiqr9Iior2QAohEBFgzQBIg1AsAPQAuAPAQANQATAOAMAjQAPAqA+FjQBBFyACBWQACBAAdGCQAYFngSASQgOAPgXAAQgNAAgQgFg");
	this.shape_74.setTransform(50.7,238.2);

	var maskedShapeInstanceList = [this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_54}]},35).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(5));

	// Layer_28
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag5AzQgXgVAAgeQAAgdAXgVQAYgWAhAAQAiAAAXAWQAYAVAAAdQAAAegYAVQgXAWgiAAQghAAgYgWg");
	this.shape_75.setTransform(163.6,246);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAyBfQgYAIgigYIgJgGQgdgRgWgfQgNgUgHgUQgHgSABgTQACgQAGgJQAFgIAJgDQAIgFAQABIABgBQAagMAjAeIAHAFQAfAWAUAcIALAUQAIAPADAZIAAASQgBAIgCAEIgOARIgNAIQgDACgEAAQgDAAgEgCg");
	this.shape_76.setTransform(162.5,239.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAqCHQgYgGgjgvIgJgLQgdgggXgsQgOgbgIgdQgJgXADgZQACgVAKgKQAIgJAOADQALgCAVAKIACAAQAcgEAnA9IAHAJQAgAqATAkQAHAQADAMQAHATAEAkQABANgBAKQgCALgFAFIgWAQQgNAFgIgCIgCABQgFAAgJgNg");
	this.shape_77.setTransform(161.4,234.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AA1DLQgGABgMgZQgZgVglhGIgJgRQgdgugYg5QgOgjgKgkQgLgdAEgfQAFgbANgKQALgJATAIQANACAcATIACABQAdADArBcIAHANQAhA+ASAtIALAkQAGAWAEAvQABAQgCAMQgDAOgHAFQgSALgOAFQgIACgGAAQgIAAgEgDg");
	this.shape_78.setTransform(160.3,228.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAvEDQgGgBgOgkQgZgigmheIgKgWQgdg9gZhGQgPgrgLgsQgNgiAGglQAGggAQgLQAPgKAXAOQARAFAhAcIACACQAgALAuB7IAIAQQAhBSASA3QAHAbADARQAFAZAEA6QABAUgCAOQgEARgJAFQgYALgRAEIgMABQgOAAgHgGg");
	this.shape_79.setTransform(159.2,222.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AApE6QgGgDgQguQgYgwgph2IgKgcQgdhKgZhUQgQgygNg0QgOgoAHgqQAHgnAUgLQASgKAcATQATAJAnAlIADACQAjAUAwCZIAIAVQAjBlARBBQAHAgACATQAEAdAFBEQABAYgEAQQgEATgLAFQgdAMgVAEIgKABQgUAAgKgLg");
	this.shape_80.setTransform(158.1,216.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAkFyQgHgFgRg5QgZg+gqiNIgKghQgdhZgbhhQgQg6gOg8QgRgtAJgwQAIgsAYgMQAVgKAhAYQAWANAtAtIADADQAlAcA0C4IAIAYQAkB6AQBKQAHAlABAWIAJBvQABAbgEASQgFAXgNAFQgkAMgXADIgJABQgaAAgMgPg");
	this.shape_81.setTransform(156.9,210);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAeGqQgHgHgThDQgZhNgsikIgKgnQgdhogchtIggiFQgSgzAKg1QAKgzAbgMQAYgLAlAdQAZARAzA3IADAEQAoAjA3DWIAIAdQAlCOAPBTQAHAqACAZIAIB8QABAfgFAUQgGAagPAFQgpAOgcACIgFAAQgiAAgOgTg");
	this.shape_82.setTransform(155.8,204);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAYHiQgHgJgUhOQgahagti8IgLgsIg5jxIgiiVQgVg5AMg6QALg4AfgNQAagLArAiQAbAVA5A/IAEAFQAqArA6D1IAIAhQAmCiAPBcQAHAvABAbQABAoAHBjQAAAjgFAWQgHAcgRAGQgvAOgfABIgDAAQgpAAgQgXg");
	this.shape_83.setTransform(154.7,197.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AATIaQgSgahgm3IhemwQgXg/ANhAQANg+AigNQAegMAvAoQAfAZBCBNQAwA3BCE1QA9EYAABVQAAArAHBuQABBaghAJQg1APgiAAQgwAAgSgbg");
	this.shape_84.setTransform(153.6,191.9);

	var maskedShapeInstanceList = [this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75}]},34).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).wait(17));

	// Layer_27
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag9A+QgZgZAAglQAAgjAZgaQAZgZAkgBQAlABAYAZQAaAaAAAjQAAAlgaAZQgYAZglAAQgkAAgZgZg");
	this.shape_85.setTransform(98.7,290.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgVBhQgWgEgdgLIgNgHQgRgIgHgLQgIgNgEgUIgCgVQADgVAXgUQAKgLAOgKQALgIANgGQAUgMAigHIACgBQAfgGATAGQAOAEAQAMIAMALQAUAVAEAYQABALgBAKIgBAHQgDAOgIAPQgJATgYAPQgLAJgMAGQgeAOgcAAIgFAAIgNgBg");
	this.shape_86.setTransform(97.6,290.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgeBtIhAgNIgQgGQgYgHgIgMQgKgOgFgaIgCgZIAAAAQAFgVAkgVQAOgMAUgKQAOgIAQgHQAVgLAsgOIAEgCQAngNAUAEQARACAVAOIAPAMQAdAaADAbQABAOgCANIgCAIQgEAQgOASQgLAUghARQgNAJgRAHQgoAQgfAAIgFABQgKAAgIgCg");
	this.shape_87.setTransform(96.5,289.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AglB6QgXgFg2gGIgUgFQgfgGgKgMQgLgPgGggIgDgeIAAgBQAHgVAygWQASgLAYgLQARgIAUgHQAWgLA2gWIAFgCQAwgTAWABQATAAAaAQIATAOQAlAeADAeQABASgEAPIgDAJQgFARgSAWQgOAVgqATQgRAJgUAIQgyARgjABIgIABQgLAAgHgCg");
	this.shape_88.setTransform(95.3,288.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgtCHQgYgGhDgDIgXgEQgmgEgKgMQgOgRgGglIgEgkIAAAAQAJgWA/gYQAWgKAegLQAUgIAXgIIBWgoIAHgDQA4gZAXgBQAXgDAfASQALAGALAJQAuAjACAiQABAVgEAQIgEAMQgHASgXAaQgRAWgzAVQgTAJgZAIQg7ATgnACIgFAAQgPAAgKgCg");
	this.shape_89.setTransform(94.2,287.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag1CVQgZgGhPgCIgagCQgugDgLgMQgPgSgIgrIgEgpIAAgBQALgVBNgaIA8gVIAygQQAXgKBKglIAIgEQBBggAYgDQAagFAkAUQANAHANAKQA1AnACAlQACAYgGATIgFANQgJATgbAeQgTAXg8AXQgXAJgdAJQhFAVgqACIgJAAQgPAAgKgCg");
	this.shape_90.setTransform(93.1,286.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag+CiQgZgGhbABIgegBQg1gBgMgOQgRgSgJgyIgEgtIAAgBQANgXBagZIBFgWIA4gQQAZgKBUgsIAKgGQBJglAZgGQAdgIApAWQAOAIAPALQA+ArABApQACAcgHAVIgGAOQgKAVghAhQgVAYhFAZQgaAJggAKQhQAXgtACIgJAAQgSAAgMgDg");
	this.shape_91.setTransform(92,285);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhGCwQgZgHhoADQhaAEgRgRQgTgUgJg3IgGg0QAQgXBogbICMgmQAZgJBeg0QBbgyAdgJQAqgNBFAwQBFAwACAsQACApgQAcQgMAXglAlQghAiiGAlQhlAcgyAAQgSAAgMgDg");
	this.shape_92.setTransform(90.9,283.9);

	var maskedShapeInstanceList = [this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85}]},28).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).wait(25));

	// Layer_26
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AguAuQgTgTAAgbQAAgaATgUQAUgTAaAAQAcAAATATQATAUAAAaQAAAbgTATQgTAUgcAAQgaAAgUgUg");
	this.shape_93.setTransform(211.6,202.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAEBhQgQgFgSgNQgNgJgKgMQgPgRgGgOQgGgPAAgSQAAgUAHgRQAFgQAPgOIAHgHQATgQAUgDQAIgCAKABIAJACQAKADAIAFQANAGALAZQASAcABAmIAAADIgBAWQgBAUgHAMIgHAOQgIANgJAEQgGADgKABIgLACQgHAAgKgEg");
	this.shape_94.setTransform(210.1,198.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAIB/QgTgJgWgVQgQgNgMgPQgUgYgGgQQgIgSAAgZIAAAAQAAgaAHgWQAHgTATgUIAKgIQAbgXAXgDQALgCAMACIALAEQANAFAIAIQANAHALAoQAQAjACA0IAAAEIABAdQABAagHAPIgIAUQgIASgKAEQgIADgOABIgOABQgIgBgMgJg");
	this.shape_95.setTransform(208.6,194.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AALCdQgVgNgbgcQgSgSgOgSQgZgggIgRQgJgVAAggIAAAAQAAggAJgbQAHgXAZgYIALgLQAigdAagEQAPgCAOAEIAOAFQAQAHAIALQANAJAKA1QAQAsABBCIABAFIACAjQADAigHARQgEAOgEALQgJAYgMAEQgJADgRAAIgRABQgJgDgPgNg");
	this.shape_96.setTransform(207.2,190.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AApDRQgJgFgSgQQgXgSgggkQgVgWgQgVQgdgngJgTQgLgYAAgnIAAAAQABgmAJggQAJgaAdgeIAOgNQApgjAegEQARgCARAFQAIACAHAEQATAKAJANQAMALAKBDQAPA1ACBOIAAAGIAFArQADAogGAUQgEARgEANQgKAegNAEQgKADgVAAIgVAAg");
	this.shape_97.setTransform(205.8,186.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("ABHD2IgYgBQgKgGgUgVQgagWgkgrQgYgbgSgYQgigugKgVQgNgbABgtIAAgBQAAgsALglQAJgeAjgiIAQgPQAwgqAigEQAUgCATAGQAJADAJAFQAVAMAKAQQALAMAKBSQANA8ADBcIABAHIAFAyQAGAvgGAWQgEAUgFAPQgKAlgPAEQgJACgTAAIgIAAg");
	this.shape_98.setTransform(204.5,182.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("ABREaIgcgCQgLgHgWgZQgcgbgpgyIgvg6Qgng2gKgXQgPgdABg1IAAgBQAAgxAMgrQAKghAognIASgRQA3gxAmgEQAWgCAWAHQAKAEAKAFQAZAPAJASQALAOAKBgQAMBFADBpIABAIIAHA5QAHA2gGAYQgDAYgFARQgMAqgQAEQgJACgQAAIgPAAg");
	this.shape_99.setTransform(203.1,178.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ABaE+IgegCQgMgJgZgcQgegggug5IgzhCQgsg9gMgZQgQggABg7IAAgBQAAg4ANgvQALglAtgtIAVgTQA+g3AqgEQAYgCAYAIQALAEALAHQAcARAKAUQALAQAJBuQALBNAEB3IAAAJIAJA/QAJA+gGAaQgDAbgGATQgMAxgRADQgJACgQAAIgVgBg");
	this.shape_100.setTransform(201.7,174.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("ABkFiIgigCQgNgKgcghQgggkgyhBIg4hKQgxhEgNgaQgRgkAAhBIAAgCQABg9AOg1QAMgoAygyIAXgVQBFg9AugFQAbgCAaAKQAMAEANAIQAeATALAXQAKARAJB9QAKBVAECFIABAKIAKBFQALBFgGAdQgEAdgFAWQgNA3gTADIgUABIgegBg");
	this.shape_101.setTransform(200.4,170.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("ABtGHIglgDQgNgMgfglQgigpg3hIIg9hRQg2hLgNgcQgUgnABhIIAAgCQABhEAPg5QANgsA3g3IAZgXQBMhEAygEQAegDAcALQAOAFANAJQAhAWALAZQAKATAJCKQAIBeAFCSIABALIAMBNQAMBLgFAgQgEAggGAYQgNA9gVADQgIABgOAAIghgBg");
	this.shape_102.setTransform(199,166.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AB2GrIgogEQgOgNghgpQglgtg7hPIhChZQg7hTgOgeQgVgpABhQIAAgBQAAhKARg+QANgwA9g7IAbgaQBThKA2gFQAggCAfAMQAPAGAOAJQAkAYAMAcQAJAUAICZQAIBmAFCfIABAMIANBUQAOBTgFAhQgEAkgGAaQgOBCgWAEIgSAAIgqgBg");
	this.shape_103.setTransform(197.7,162.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AB/HPIgrgEQgPgPgkgtQgngyhAhWIhGhgQg/hbgQgfQgXgtABhWIAAgCQABhPAShEQAOgzBBhAIAegcQBbhRA5gEQAjgDAhANQAQAGAPALQAnAaAMAfQAJAVAICnQAHBvAFCtIABAMIAPBbQAQBagFAjQgEAogGAcQgPBIgYADIgUABQgSAAgbgCg");
	this.shape_104.setTransform(196.3,158);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("ACJHzIgvgFQghghiDi0QiHi6gZgxQgYgvABhfQABhWAThIQAShDBjhXQBihXA9gFQA4gFAyAiQAqAdANAiQANAmAOHXQAAAIASBnQARBhgEAmQgRCWgjAEIgQABQgUAAghgDg");
	this.shape_105.setTransform(195,154);

	var maskedShapeInstanceList = [this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93}]},32).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).wait(16));

	// Layer_25
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAcAAATATQAUAUAAAbQAAAcgUATQgTAUgcAAQgbAAgUgUg");
	this.shape_106.setTransform(182.5,260.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgCBTIgJgHQgXgUgQgZIgKgUQgLgbgBgbQgBghAJgNIANgMQAGgEAFABQAGABAEgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQADAAAFACQAMACAMAMIACABQAYAMATAnIAAABQANAbAFAUQAEANAAAPIAAAWQgBAMgDAKQgDAIgEAEQgFAGgKgBIgBgCIgGABQgFADgFAAQgOAAgSgWg");
	this.shape_107.setTransform(181.2,254.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAvChIgDgFIgIgCQgPAHgcg8IgIgNQgYgngQghIgKgbQgLgogCgjIAAgBQgEgxANgMIATgNQAJgFAHAGQAJAGADABQACgBAAAIIAHAIQAMAKAMAXIACACQAXAYASA6IAAACQAOApAGAZQAEASABAUIABAeQAAARgEANQgCANgHAEQgDACgEAAQgGAAgHgDg");
	this.shape_108.setTransform(179.9,247.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAvDZIgFgHIgKgGQgNADgehaIgJgTIgnhiIgKgjQgMg0gEgrIAAgBQgFhCAPgMIAagOQANgEAJAJIANAOQACAAgBAMQABAGAFAJQALARAMAiIACAEQAVAkASBNIAAADIAVBVQAFAWACAaIACAmQABAVgEAQQgDASgJAEIgFABQgIAAgMgIg");
	this.shape_109.setTransform(178.6,241.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAvERIgHgIIgLgKQgMgBggh5IgJgZIgnh7IgLgsQgNhBgEgyIAAgBQgHhTASgLIAhgPQAPgFALAOIAPAUQACABgDARQAAAIAFANQAMAZALAtIACAFQATAvASBgIABAEQANBIAIAhQAGAbADAfIADAuQACAZgEAUQgEAWgLAEIgEABQgKAAgQgOg");
	this.shape_110.setTransform(177.3,234.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAuFJIgIgLIgOgNQgJgFgjiXIgIgfIgoiVIgKg1QgPhNgFg5IAAgCQgJhkAVgKQAQgFAYgLQASgFANASQAOAUACAHQABABgDAWQgBALAEAQQANAhALA4IACAGQARA7ASB0IAAAFQAOBWAJAlQAHAgADAkIAEA2QADAegEAXQgEAagNAEIgEABQgMAAgUgTg");
	this.shape_111.setTransform(176,228.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAuGBIgKgMIgPgRQgIgKgli1IgIglIgoivIgLg9QgPhZgGhBIAAgCQgLh1AYgJQASgFAcgNQAVgFAPAXQAQAZACAIQABACgGAbQgCAOAGATQAMAoALBEIACAHQAPBHASCHIABAGQAOBlAJApQAIAlAEApIAFA+QAEAjgFAaQgEAegPAEIgEABQgNAAgYgZg");
	this.shape_112.setTransform(174.7,221.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAtG5IgMgPIgRgUQgGgOgmjTIgJgrIgojJIgLhFQgQhmgHhIIAAgDQgNiFAbgJQAVgFAggOQAYgFARAbQARAeACAKQABACgHAgQgDARAGAXQANAvAKBPIABAJQANBSATCbIAAAHQAOB0AKAtQAKApAEAvIAGBGQAFAngEAeQgGAigQAEIgDABQgQAAgcgfg");
	this.shape_113.setTransform(173.5,215.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAtHxIgOgQIgSgYQgFgSgpjyIgIgxIgojjQgKg9gBgQQgRhygJhQIAAgDQgOiWAegIQAXgFAkgPQAcgGARAgQAVAiABAMQABADgJAlQgEATAGAbQANA3AKBaIABAKQAMBeASCuIABAIQAOCDALAxQAKAuAFA0IAHBOQAGArgFAhQgFAngTAEIgDAAQgRAAgggkg");
	this.shape_114.setTransform(172.2,209);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAsIpIgjguQgDgYgzlFQgwkrgEgoQgSiBgJhYQgQinAggHQAagFApgQQAegGAUAkQAWAnABAOQABAEgKApQgFAWAGAeQANBCAKBtIAcEsQAPCZAMA2QAMAzAFA5IAIBWQAHAwgFAlQgGArgVAEIgDAAQgTAAgkgqg");
	this.shape_115.setTransform(170.9,202.6);

	var maskedShapeInstanceList = [this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_106}]},20).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).wait(31));

	// Layer_24
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("Ag8A8QgZgZAAgjQAAgjAZgZQAZgYAjgBQAkABAYAYQAaAZAAAjQAAAjgaAZQgYAZgkAAQgjAAgZgZg");
	this.shape_116.setTransform(211.1,261.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAGB1IgFgDIgQgGQgJgCgMgHQgUgMgNgSIgDgEQgOgZgGgUQgEgRAAgQIAAgBQAAgYAIgaQAFgPAHgMIAFgGQAGgIAHgFQAIgGAKgBIAPgCQAHgCAKAAQAIAAAIACQAKACAIAEQAUAJAOATQAGAGAEAJQAIALAFAOQALAWADAlIAAALQgBAqgSAYIgFAFQgIALgIAGQgGAGgIABIgLACIgCAAQgKAAgOgFg");
	this.shape_117.setTransform(212,260.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAJCTIgHgFIgSgKQgIgDgQgMQgZgRgOgXIgCgGQgPgigGgXQgFgVAAgWIAAAAQgBgcAJgkQAEgTAHgRIAFgGQAIgMAIgFQAKgIAMACIATgBIAVgBQALABAKAEQALAEAJAHQAVAQAOAbQAFAIAEAMQAHAOAFASQALAaAFAzIAAANQACA5gTAaIgFAHQgKAQgHAGQgIAJgLgBIgNAAQgMgCgQgMg");
	this.shape_118.setTransform(212.9,259.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AA5DJIgQgBQgMgFgTgSIgHgHIgUgQQgIgCgVgRQgcgWgOgdIgDgHQgQgsgGgZQgFgagBgaIAAgBQAAgfAIguQAEgXAHgVIAFgHQAKgPAIgGQANgJAPAEIAWABQAJgBARABQANABAMAGQANAGAJAKQAWAWANAjQAFAKAEAQQAHARAEAXQALAdAGBBIABAPQAEBIgTAcIgFAIQgMAWgIAGQgHAJgKAAIgFgBg");
	this.shape_119.setTransform(213.8,258.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AA/DyQgNgBgFgBQgMgJgVgYIgIgJIgXgVQgIgDgYgVQghgbgOgiIgDgJQgQg2gGgbQgGgfgBgeIAAgCQgBgjAIg3QAEgbAGgZIAGgIQALgSAKgHQAOgLASAHQAKACAQAAIAdABQARADAOAIQAOAHAKANQAXAcAMArIAJAgQAGAVAEAaQAKAhAIBOIACATQAGBVgTAgIgGAJQgNAagIAIQgIAJgLAAIgIgBg");
	this.shape_120.setTransform(214.8,257.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("ABGEcQgQgCgEgCQgNgMgXgeIgJgMQgLgNgOgMQgIgDgdgbQgkgfgPgoIgDgKQgRhAgGgdQgHgkgBgjIAAgCQgBgmAIhBQAEgfAGgeIAGgJQANgUAKgIQARgNAUAJQALAEATABIAhACQAUADAQAKQAPAJALAQQAXAiAMAzQAEAPAEAXQAGAXAEAfQAJAkALBdIACAUQAIBlgUAiIgFALQgPAfgIAIQgJAKgMAAIgKgBg");
	this.shape_121.setTransform(215.7,256.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("ABMFFQgSgCgFgDQgNgOgYglIgLgOQgMgQgPgOQgIgEgggfQgpgkgQguIgDgLQgRhJgGggQgHgqgCgmIAAgCQgBgrAIhKQAEgjAFgiIAHgKQAOgXALgJQATgOAXALQAMAEAVACIAlADQAYAEARAMQARALALATQAZApALA6QAEARADAaQAFAbAEAkQAJAnANBqIACAXQALBzgUAlIgGAMQgRAkgIAJQgJALgNAAQgGAAgHgCg");
	this.shape_122.setTransform(216.7,255.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("ABTFuQgUgDgGgEQgNgRgbgqIgLgSQgNgSgRgQQgHgFglgjQgsgpgRgzIgDgMIgYh2QgIgvgCgrIAAgCQgBguAIhUIAJhOIAGgKQARgaALgKQAVgQAbAOQAMAFAYADIApAEQAbAFASANQAUAOALAWQAaAuAKBDIAHAwQAEAfAEAoQAIApAPB4IADAbQANCBgUAoIgHANQgSAogIAKQgLANgOAAQgHAAgHgDg");
	this.shape_123.setTransform(217.7,254.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("ABaGYQgXgEgFgFQgOgUgdgwIgMgUQgOgVgTgTQgGgEgpgoQgxgvgRg4IgDgNQgThegGgkQgIg0gCgvIAAgDQgCgxAIheIAJhWIAGgMQASgdANgKQAXgSAdAQQAOAHAaADIAtAFQAeAGAUAPQAVAQAMAZQAaA0AKBLQADAVADAhQAEAhAEAtQAHAtARCGIAEAcQAPCRgVAqIgHAOQgTAugJAKQgLAOgPAAQgIAAgIgDg");
	this.shape_124.setTransform(218.6,253.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("ABgHBQgZgEgGgGQgOgXgeg2QgGgMgIgLQgOgXgVgVQgGgFgtgtQg1gzgRg9IgDgPIgaiPQgJg4gCg0IAAgDQgDg1AIhoIAJheIAHgMQATggAOgLQAZgUAgATQAPAIAcADIAyAGQAgAHAXARQAWASANAcQAbA6AJBTIAGA8QADAkADAxQAHAwATCUIAEAfQARCfgUAtIgIAQQgVAygIALQgMAPgRAAQgJAAgJgEg");
	this.shape_125.setTransform(219.6,252.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("ABmHrQgbgFgGgHIgvhXIgOgYQgQgagWgYIg3g2Qg5g5gRhCIgEgRIgbiaQgJg+gCg3IAAgEQgDg5AIhxIAIhmIAHgNQAVgkAPgMQAbgUAjAUQAPAJAfAFIA3AHQAjAHAYATQAYATANAfQAcBBAIBbIAGBBIAFBdIAcDVIAEAiQAUCtgVAwIgIARQgXA3gIALQgNARgSAAQgJAAgLgEg");
	this.shape_126.setTransform(220.6,251.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("ABtIUQgegGgGgIIgxhfIgQgbQgQgdgXgZIg7g8Qg9g9gShJIgEgRQgVh7gGgsQgKhDgDg8IAAgDQgDg9AIh7IAIhvIAHgNQAXgnAPgNQAdgWAmAXQARALAhAEIA7AIQAmAIAaAWQAZAVAOAiQAdBHAHBiIAFBIIAFBkIAdDmIAFAkQAWC8gVAyIgIATQgZA8gIAMQgOASgTAAQgKAAgMgFg");
	this.shape_127.setTransform(221.6,250.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("ABzI9QgggGgGgJIg0hoQgXgvgjgqIg/hAQhJhLgOhYIgdi0QgLhJgChCQgDhAAHiFIAIh3QAdg2ATgQQAfgYApAaQASALAkAGIA+AJQBRARAdBLQAeBNAHBqQAEA8AEB9QAGBAAfDeQAXDLgVA0QghBTgKAPQgPATgUAAQgLAAgNgGg");
	this.shape_128.setTransform(222.6,250);

	var maskedShapeInstanceList = [this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_116}]},20).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).wait(28));

	// Layer_23
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgwAxQgUgUAAgdQAAgbAUgVQAUgUAcAAQAcAAAVAUQAUAVAAAbQAAAdgUAUQgVAUgcAAQgcAAgUgUg");
	this.shape_129.setTransform(153.4,280.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAABhIgCgBQghgDgPgLQgKgIgJgKQgJgIgGgJQgUgbABgWIAAgBQAAgbAdgdIALgKQAXgVATgFQAMgCARABQANABANADQAfAHAQAPIAEAEQAMAPAFAfQADAMgBALQABAPgDALQgEARgVAWIgGAGQgKAKgMAIQgPAFgVAAIgNAAg");
	this.shape_130.setTransform(152.1,278);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAAB8IgDAAQgvgHgQgNQgOgLgLgNQgLgMgJgMQgcglAAgZIAAgBQABgeAtgpIAOgNQAjgdAVgEQAPgDAXADQARACATAEQArAJATARIAGAFQANARAFAtIADAfQAAAWgDANQgDASggAgIgIAIQgOANgPALQgOADgSAAQgPAAgSgCg");
	this.shape_131.setTransform(150.8,275.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAACYIgEgBQg+gKgQgPQgRgPgOgQQgOgPgKgOQgmgxABgcIAAgBQACghA8g1IASgPQAuglAXgEQASgCAeAEQAUACAYAFQA5AMAWASIAGAGQAOATAGA9QADAVAAARQABAbgDAQQgDAUgqApIgLAKQgRARgTAOQgMACgPAAQgXAAgfgEg");
	this.shape_132.setTransform(149.5,273.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAACzIgFgBQhMgNgRgRIgkglQgRgTgNgRQgvg7ACgfIAAgBQACglBMhAIAWgTQA5gtAZgDQAVgCAlAFQAYADAdAHQBFAOAZATIAIAHQAPAWAGBLQADAaAAAUQABAhgCATQgEAUg0AzIgNAMQgVAVgVARIgWABQgfAAgtgHg");
	this.shape_133.setTransform(148.2,271.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AAADOIgHgCQhagQgSgTIgpgsIgjgpQg4hGACgjIAAgBQADgoBchLIAagVQBEg1AbgDQAXgCAtAGQAbAEAiAHQBTARAbAUQAHAFACAEQARAXAGBbQADAeABAXQABAngDAVQgDAWg+A9IgQAOQgYAYgZAUIgNABQgoAAg9gKg");
	this.shape_134.setTransform(146.9,269.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAADpIgIgCQhogTgTgVQgZgagWgZQgWgZgRgWQhChQADgnIAAAAQADgsBshXIAegYQBPg9AegCQAZgCA0AIQAfAFAmAIQBhATAeAWQAHAEADAFQARAaAIBpIADA8QACAugDAXQgDAYhJBGIgSARQgbAagcAYIgKAAQguAAhLgNg");
	this.shape_135.setTransform(145.6,267.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAAEDIgJgCQh3gWgTgXIg1g5Igsg2QhLhbADgpIAAgBQAEgvB8hjIAhgaQBahFAggCQAcgCA7AKQAiAFAsAJQBuAWAhAXQAIAFADAGQASAbAIB4QADAnABAdQACA0gDAaQgDAYhTBQIgUATQgfAeggAbQg1AAhdgRg");
	this.shape_136.setTransform(144.4,265.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgKEcQiFgZgUgaQhAhEgsg2QhUhmAEgtQAEgzCMhuQCEhqAogCQAwgCCIAbQCYAfATAeQATAeAICHQAIB0gFAtQgCAahdBZQguAtguAnQg+gBhvgVg");
	this.shape_137.setTransform(143.1,263.1);

	var maskedShapeInstanceList = [this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129}]},26).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).wait(26));

	// Layer_22
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgrAsQgTgSAAgaQAAgZATgSQATgSAYAAQAZAAATASQATASgBAZQABAagTASQgTASgZAAQgYAAgTgSg");
	this.shape_138.setTransform(233.4,212.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AADBVIgMgEIgRgIQgQgHgQgaIgDgFQgSgiAAgYQAAgLADgJQAEgKAHgGQAHgJAPgGQAKgGALgDQAYgGASABIADAAQALACAKALQAOALAKAOIABACQAHAMADAPQADARgDARIAAACQgEASgGANQgFALgGAGIgMAMIgEAEIgLAIQgFACgGAAQgIAAgJgEg");
	this.shape_139.setTransform(233.3,209.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgGBqIgPgJIgTgPQgQgKgSgnIgDgIQgWgwABgbQAAgPAFgLQAFgMAMgHQAKgIAVgFQANgFAQgCQAkgFATADIADABQAMADAMASQAPASAKASIABAEQAHAPAAAUQABAXgGAXIgBACQgIAYgHAOQgIAPgIAIIgPANIgGAGIgPAKIgFABQgLAAgQgNg");
	this.shape_140.setTransform(233.3,206.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgRB+IgRgOIgVgVQgQgMgUg1IgEgKQgZhAABgdQABgTAGgNQAIgOAPgHQANgHAcgFQAQgEAUgCQAwgDAVAEIAEACQAMAFAOAZQAQAZAKAXIABAEQAHAUgCAZQgCAdgKAbIgBADQgMAdgIAQQgLAUgJAIIgTAQIgIAGIgSAOIgCAAQgOAAgWgYg");
	this.shape_141.setTransform(233.5,203.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgcCTIgSgTIgYgcQgQgPgWhCIgFgMQgbhRABgeQABgXAIgOQAJgRATgHQAQgHAjgEQAUgDAYgBQA7gBAXAFIAEACQANAGAQAhQARAgAKAbIABAGQAGAXgDAfQgFAjgNAfIgBADQgQAkgKASQgNAXgLAJIgYATIgJAHIgWARIAAAAQgPAAgcgjg");
	this.shape_142.setTransform(233.6,200.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgnCoIgVgYIgZgjQgQgSgZhPIgFgMQgehiABggQACgbAJgQQALgUAXgGQATgIAqgCQAXgDAcgBQBGABAZAHIAFACQANAIASApQATAnAJAeIABAHQAGAcgFAkQgHApgRAkIgBADIgfA9QgQAcgNAJIgcAXIgKAIIgaATQgPgBghgtg");
	this.shape_143.setTransform(233.8,197.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgzC9IgWgdIgcgpQgPgVgchcIgFgQQghhyABghQACgfALgSQANgWAbgHQAWgHAxgBQAagCAgABQBSACAaAIIAGADQAOAJATAwQAUAuAJAjIACAJQAGAegIAqQgJAvgVApIgCADQgXAwgNAVQgSAggOAKIghAYIgMAKIgdAVQgPgDgng1g");
	this.shape_144.setTransform(234,193.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("Ag+DSIgYghQgUgegKgSQgQgYgehpIgFgSQgkiCACgiQACgjAMgVQAPgYAfgHQAYgHA5AAQAdgBAkABQBeAFAbAJIAHADQAPALAUA3QAWA1AJAnIABAKQAGAjgKAvQgLA1gZAtIgCAEQgbA1gOAXQgVAlgQAKIglAbIgNALIggAYQgSgFgqg/g");
	this.shape_145.setTransform(234.2,190.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhKDoIgZgmQgWgigLgVQgPgbggh1IgGgVQgniSACgkQACgnAOgWQARgbAjgHQAbgHA/ABQAhAAAoACQBpAGAeAKIAHAEQAPANAXA+QAWA8AJAsIACALQAFAmgMA1QgOA7gcAyIgCAEQgfA7gQAZQgXAogSAMIgpAdIgPAMIgjAaQgTgGgvhIg");
	this.shape_146.setTransform(234.4,187.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AhVD9IgcgrQgXgmgLgXQgQgdgiiDIgGgXQgriiADgmQADgrAPgYQATgdAngHQAegGBGABQAjABAtACQB1AIAfAMIAIAEQAQAOAYBGQAYBDAJAwIABAMQAFArgOA6QgQBBggA2IgCAEIg0BcQgbAtgSAMIgtAgIgRAMIgnAeQgUgIgzhSg");
	this.shape_147.setTransform(234.6,184.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AhhEUIgdgwQgZgrgMgaQgPgggliQIgHgZQgtiyADgnQADgvARgaQAUgfArgIQAhgGBNADQAnABAxAEQCAAJAhANQAGACACADQARAQAaBNQAZBKAJA0IABANQAFAugQBAQgTBHgjA7IgDAFQgnBGgSAdQgdAxgVANQgPAKgiAYIgSAOIgqAgQgWgJg3hbg");
	this.shape_148.setTransform(234.9,181.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhtEqQgzhVgTgrQgQgmgti1QgwjDADgpQADgyATgcQAWgiAvgHQA2gJChANQCmANARARQARASAcBUQAbBRAIA5QAJA2gVBOQgVBPgnA/QguBQgTAgQggA1gWANQgWAOgzAmIguAjQgXgLg8hkg");
	this.shape_149.setTransform(235.1,177.8);

	var maskedShapeInstanceList = [this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_138}]},19).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).wait(30));

	// Layer_21
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("Ag4A5QgXgYAAghQAAggAXgXQAYgYAgAAQAhAAAYAYQAXAXAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape_150.setTransform(416.3,274.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAACIQgPAAgRgEQgRgEgPgGQgJgGgHgWQgVgjAAg5IAAgBQABg4AVgkQALgYAMgHIAIgIQAEgDAJgBQANgBAQABIAZADQAjAGARAPQAFAEAEALQAPAZAFAnQACAPAAAOQgBA0gTAgIgEAIQgNAVgOAKQgOAMgTACIgNABIgFAAg");
	this.shape_151.setTransform(418.1,269.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAAC/QgUgBgYgEQgXgFgWgHQgJgIgGgjQgUgwABhRIAAAAQABhQAVgwQAKgmAMgJQAGgGADgHQAEgEANgBQARAAAXACQAQABATADQA0AJASARQAGAFAEASQAQAhAEA6QACAUAAATQgBBKgUArIgFAMQgNAfgRAQQgRARgZADIgTACIgHgBg");
	this.shape_152.setTransform(419.9,264.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAAD3QgYgBgggFQgdgGgcgIQgJgJgHgyQgRg8ABhoIAAgBQAChoATg8QAKg0AMgKQAHgJADgJQAEgFARAAQAWgBAeADQAUACAYAEQBFAMATATQAHAGAFAaQAPApAEBMIACAxQgBBhgUA1IgGAQQgOApgUAVQgUAXghAEIgUABIgMAAg");
	this.shape_153.setTransform(421.7,259.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAAEvQgdgBgogHQgjgHgigJQgJgJgGhAQgQhJACiAIAAgBQADiAAShJQAJhBAMgLQAIgLACgMQAEgHAWABQAagBAlAEIA2AIQBWAPAVAUQAIAIAFAhQAPAxADBeIACA7QgBB4gVBAIgGATQgQA0gWAZQgYAegnAFQgKABgNAAIgQAAg");
	this.shape_154.setTransform(423.5,253.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAAFnQgigCgvgIQgpgIgogJQgKgLgGhOQgNhVACiYIAAgBQADiYARhVQAJhPAMgNQAJgNACgOQAEgIAaAAQAfABArAFIA/AJQBnARAXAXQAJAJAGAoQAOA6ADBwIACBFQgCCPgVBJIgGAYQgRA+gZAeQgbAkguAGQgMACgPAAIgTgBg");
	this.shape_155.setTransform(425.3,248.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAAGfQgngCg2gJQgvgJgvgKQgKgMgFhcQgMhiAEiwIAAgBQADivAQhiQAJhdAMgOQAJgPACgRQAEgJAeABQAjAAAyAGQAiAEAoAHQB4AVAYAYQAKAKAGAvQAOBCADCDIABBOQgCCmgVBVIgHAbQgSBIgbAjQgfAqg1AHQgNABgSAAIgWAAg");
	this.shape_156.setTransform(427,243.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAAHXQgsgDg+gKIhpgVQgLgNgEhqQgKhuAEjIIAAgBQAEjHAOhuQAJhrAMgPQAKgRABgUQAFgKAiAAQAoACA4AHQAnAEAsAIQCJAXAaAaQALAMAHA2QAOBLACCUIABBZQgCC9gWBeIgHAfQgTBTgeAoQgjAwg7AIQgPACgTAAIgagBg");
	this.shape_157.setTransform(428.8,238.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AABIPQgxgDhGgLQg7gLg6gMQgLgOgEh4QgIh6AEjhIAAAAQAFjgANh6QAJh4ALgRQALgTABgWQAFgMAnABQAsABA/AIQArAGAyAIQCaAaAbAcQAMANAIA9QANBTACCnIAABjQgCDTgWBpIgHAjQgVBdghAtQgmA3hCAIQgQABgVAAIgdAAg");
	this.shape_158.setTransform(430.6,233);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AABJGQg1gDhNgMIiCgYQgLgPgEiHQgGiGAFj5IAAAAQAFj4ALiHQAJiGAMgRQAMgWABgYQAEgOArACQAxABBGAJIBmAQQCrAdAdAeQANAOAIBEQAMBcACC4IABBtQgDDrgWBzIgIAmQgWBngjAzQgpA9hKAIQgRACgWAAIgigBg");
	this.shape_159.setTransform(432.3,227.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AABJ/Qg6gEhUgNIiOgaQgMgRgDiUQgFiTAGkRQAGkPAKiTQAJiUALgTQANgYABgbQAFgPAuACQA1ACBNAKQAzAHA9AKQC8AgAfAgQAOAPAIBMQAMBjACDLIAAB3QgDEBgXB+IgIAqQgXBygmA3QgsBDhRAKQgSACgYAAIgmgBg");
	this.shape_160.setTransform(434.1,222.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AiZKkIiagcQgYgjANpZQANpUAWgpQAOgaAAgdQAFgQAzACQBgAECmAcQDNAiAhAiQAjAmABGHQACF7gcCmQgaCegvBIQgwBJhYAKQgTADgZAAQhIAAh9gUg");
	this.shape_161.setTransform(435.8,217.3);

	var maskedShapeInstanceList = [this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_150}]},29).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).wait(20));

	// Layer_20
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgqArQgSgSAAgZQAAgZASgRQASgSAYAAQAZAAASASQASARAAAZQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_162.setTransform(345,182.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AANBUQgIAAgIgIQgUgHgOgVIgIgLQgIgOgFgNIgDgMQgCgNAAgJQABgMAEgLQAGgRAKgJIAIgFIAKgDIAPgCQAKgDALANQAUAHAOAaIADAFQAQAfgBAfQgBATgEANQgDAIgDAFQgEAFgGAEIgEABIgGACIgKAAIgKAAg");
	this.shape_163.setTransform(344.9,186.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAjB3QgEAAgDgCIgUgLQgIgDgIgOQgSgOgPggIgHgPQgIgTgFgQIgDgRIgDgcQADgPAFgOQAKgYAMgIQAGgDAGgBQAGgBAGABQALABAGADQAKgBAKAYQASAQALAkIADAIQANAqgCAnQgBAZgFAPQgDAMgEAGQgEAEgKAFIgDABIgCAAg");
	this.shape_164.setTransform(344.7,190.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAgCcQgFgBgEgFQgJgMgLgJQgHgFgJgWQgRgVgOgrIgIgSQgHgYgEgVIgEgVIgDgiQAEgSAGgRQAOgeAPgHQAHgDAHAAQAIAAAIACQALAEAIAHQAKAAAIAlQAPAXAKAwIACAJQAKA4gCAsQgCAggFARQgDAPgGAGQgFAGgMAEIgEABIgCAAg");
	this.shape_165.setTransform(344.6,194.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAbDBQgGgCgDgHQgKgTgJgOQgIgHgJgdQgRgcgNg1IgHgWIgMg2IgDgaIgEgnIANgpQARglASgGQAJgCAIAAQAJABAJAEQAPAHAIAJQAJADAGAwQANAfAHA7IACAMQAIBEgDAyQgDAngFASQgEATgGAHQgFAGgPAFIgEABIgFgBg");
	this.shape_166.setTransform(344.5,198.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAXDmQgHgCgDgKQgKgagKgRQgHgKgJglQgQgigNhAIgHgaIgLg/IgEgeIgEgtIAQgvQAUgsAVgFQAKgCAKACQAKABALAGQARAJAIANQAJAEAEA9QALAnAFBGIABANQAGBRgFA5QgDAugFAUQgEAWgHAIQgGAGgSAFIgEABQgDAAgDgCg");
	this.shape_167.setTransform(344.4,202.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AATEMQgIgDgEgNQgJgggKgVQgIgNgJgsQgOgpgNhKIgGgeIgMhJIgDghIgFgzIATg2QAXgyAYgEQAMgCAKADQANACAMAIQATAMAJAQQAIAGADBIQAIAvADBRIABAQQACBdgFBAQgEA0gFAVQgFAagIAJQgGAGgVAGIgEAAQgEAAgDgCg");
	this.shape_168.setTransform(344.3,206.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAOEyQgIgFgFgPQgIgmgLgaQgHgPgJgzQgOgwgMhVIgHghIgKhTIgEgmIgFg4IAVg8QAbg5AbgDQAMgBAMADQAPAEANAJQAWAPAJATQAIAHAABVQAHA3AABcIAAASQAABqgFBGQgFA6gFAYQgFAdgJAJQgHAHgYAGIgFAAQgEAAgEgCg");
	this.shape_169.setTransform(344.2,210.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAIFYQgIgGgFgRQgJgtgLgeQgHgSgJg6QgNg3gMhgIgGglIgKhcIgEgpIgGg/IAZhCQAeg/AdgCQAOgBAOAEQAQAFAOAKQAYASAKAWQAIAKgCBhQAFA+gDBnIAAATQgDB4gGBMQgGBBgFAZQgFAhgKAKQgIAIgaAFIgFABQgFAAgFgDg");
	this.shape_170.setTransform(344.3,214.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AABF9QgJgGgFgUQgKg0gKgiQgIgUgIhBQgMg/gMhqIgFgpIgLhlIgEgtIgGhFIAchIQAhhGAggBQAPgBAQAFQARAGAQAMQAaAVALAZQAHALgDBtQACBGgFBzIgBAVQgFCFgHBSQgHBHgFAcQgGAjgKALQgJAIgdAGIgFABQgGAAgFgEg");
	this.shape_171.setTransform(344.5,218.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgHGjQgLgIgFgWQgKg6gKgnQgHgWgJhIQgLhGgLh0IgFgtIgLhuIgEgzIgGhJIAehPQAlhMAjAAQARgBAQAGQAUAGARAPQAcAXALAcQAGANgFB5QAABOgHB+IgBAXQgICRgIBZQgHBOgFAdQgHAogLALQgJAIggAHIgFAAQgGAAgGgEg");
	this.shape_172.setTransform(344.8,222.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgPHJQgMgIgGgZQgKhBgKgqQgHgZgJhQQgKhMgLh/IgFgxIgJh4IgFg2IgGhPIAghVQAphTAlAAQATABASAGQAVAIASAQQAfAaALAfQAGAPgHCFQgCBWgJCIIgCAaQgLCegIBfQgIBUgGAfQgGArgNAMQgJAJgjAHIgEAAQgIAAgGgFg");
	this.shape_173.setTransform(345.2,226.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgYHvQgMgKgGgbQgKhHgLgvQgGgcgJhXQgJhTgLiJIgEg1IgKiBIgEg6IgHhVIAjhbQAshaAoACQAUAAAUAIQAWAIAUASQAhAcALAjQAGARgJCRQgEBdgMCTIgCAcQgNCsgKBlQgIBbgGAgQgHAvgNAMQgKAKglAHIgGAAQgIAAgHgFg");
	this.shape_174.setTransform(345.5,230.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("Ag0HsQgKhNgLgzQgMg7gVkwIgOjDIgEg+IgIhbIAnhhQAvhgArACQAvADApAjQAjAgALAmQAJAdgiGVQggF7gMBLQgIAygOANQgKAKgoAHIgGABQgaAAgKgvg");
	this.shape_175.setTransform(345.8,234.4);

	var maskedShapeInstanceList = [this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_162}]},32).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).wait(15));

	// Layer_19
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgyAzQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWQAWAVAAAdQAAAegWAVQgVAWgeAAQgdAAgVgWg");
	this.shape_176.setTransform(366.8,202.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AABBnQgIgBgLgGQgJgFgKgHQgSgJgNggIgBgCQgRgTAAg5IAAgBQAAgdAOgQQAIgKASgGIAFgDQARgHARAEQAMAAAQAJIAHADQAbAIAQAqIAGANQALAdgBAhQgBAOgDAOIABADIAAAEQgEAMgWALIgHAFQgRAJgQAAQgJAAgIgDg");
	this.shape_177.setTransform(363.8,197.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgPCIQgKgEgMgNQgKgIgKgNQgSgOgLgwIAAgDQgOgQAAhXIAAgBQAAgpAUgRQAKgKAbgEIAIgCQAYgFATAMQAOAFAUATIAIAFQAbAOANBAIAEASQAJApgDApQgBATgEARIADADQACADgBADQgDAMgkANIgKAEQgOAFgNAAQgUAAgSgMg");
	this.shape_178.setTransform(360.8,192.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AggCpQgKgHgOgTQgLgNgLgSQgRgTgJhBIAAgDQgKgPAAh0IAAAAQAAg2AagRQANgKAkgCIAKgBQAdgEAYAVQAPAKAYAbIAIAJQAdAUAIBWIAEAWQAGA1gEAxQgCAYgEAVIADAEQAEACgBAEQgDAOgyANIgNAEQgLADgLAAQggAAgagXg");
	this.shape_179.setTransform(357.9,187.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgxDLQgLgKgQgaQgLgRgMgYQgQgYgHhRIAAgEQgHgNAAiRIAAgBQAAhBAggSQAQgKAuAAIAMgBQAjgBAcAdQAQAPAcAkIAJALQAdAbAFBsIACAbQADBAgFA6QgDAcgEAaIAFADQAFADgBAEQgDAPg/APIgQADQgLACgJAAQgsAAgggig");
	this.shape_180.setTransform(354.9,182.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AhDDsQgMgNgRghQgLgVgOgdQgPgdgFhhIAAgFQgDgJAAixQAAhNAmgTQASgKA3ACIAPAAQApABAgAmQARATAgAuIAJANQAeAhACCCIAAAgQABBMgHBCQgDAhgFAdIAHAEQAGADgBAFQgDAQhNAQIgSADIgQABQg4AAgogvg");
	this.shape_181.setTransform(352.1,177.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AhWEOQgVgbglhZQgOgigDh3IAAjVQAAhYAtgVQAXgKBPAFQAvAEAkAuQAUAbAsBEQAiArgGC4QgECEgQBlIAIAEQAIAEgBAFQgDARhaARQgSADgQAAQhFAAgug7g");
	this.shape_182.setTransform(349.3,172.6);

	var maskedShapeInstanceList = [this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176}]},27).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).wait(27));

	// Layer_15
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_183.setTransform(386.7,267.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgCBSIgEgFQgSgUgPgcIgEgIQgVg8ALgFIABAAQAMACAMgkQAGgRAHgKQAIgNAHgBQAPgDALAjIAHAPQAIAXAHAZQAHAgACAfIAAALQAAAmgGALQgDAGgFAGIgFAGIgEACIgDABQgLAAgWgmg");
	this.shape_184.setTransform(385.3,261);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgGB/IgGgJQgXgpgVgvIgFgPQgfhvAVAEIABABQAYANAWhBQAJgcALgRQAMgWANAAQAVgCALBGIAGAeIANBXQAHA4ABAyIAAARQAABCgHANQgFALgHAKQgFAGgEADIgGAEIgCAAQgNAAglhUg");
	this.shape_185.setTransform(383.8,254.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgLCsIgGgNQgdg+gbhDIgHgUQgoijAgAOIABABQAkAZAeheQANgoANgYQASgfASAAQAcAAALBqIAFAsIALB+QAGBPABBFIABAZQAABdgIAQQgHAPgLANQgGAJgGAFQgFADgEABIgBABQgPAAg0iDg");
	this.shape_186.setTransform(382.3,248.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgQDZIgIgSQgihSghhXIgHgaQgzjWArAYIACACQAwAjAnh7QAQgzAQgfQAXgpAXACQAjABAKCNQADAbACAgIAJClQAFBnABBXIAAAgQABB6gJASQgKATgNARQgIALgIAGQgGAEgFACIgBAAQgQAAhDixg");
	this.shape_187.setTransform(380.9,242.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgVEHIgIgXQgohngnhqIgIgfQg9kKA1AhIACACQA8AvAwiYQATg/AUglQAcgzAcADQAqADAKCwQADAhABAoIAHDMQAEB+ABBrIABAnQAACVgKAVQgLAYgQAUQgLAOgJAHQgHAFgHABIgBAAQgRAAhSjeg");
	this.shape_188.setTransform(379.4,236);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgZE0IgKgbIhaj6IgJglQhIk9BAArIADACQBIA6A5i0QAWhMAYgrQAhg8AhAEQAwAEAKDTQACAoABAwIAFDyIAEEVIABAtQAACxgLAXQgNAdgTAYQgMAQgLAIQgIAGgIACIgBAAQgTAAhgkNg");
	this.shape_189.setTransform(377.9,229.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgeFhIgLgfIhlkjIgLgrQhRlvBKA0IAEADQBUBEBBjRQAahXAbgyQAmhFAmAEQA3AGAKD2QACAvABA3IACEaIAEE/IAAA0QAADOgMAZQgPAhgVAbQgOATgNAJQgKAIgJABIAAAAQgVAAhvk7g");
	this.shape_190.setTransform(376.4,223.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgjGOIh8lvQhvniBhBQQBgBQBKjuQBIjuBJAJQBJAJABGMQAAGLADEfQACEhgOAfQgSAmgYAfQgcAlgXAFIgBAAQgVAAh/lqg");
	this.shape_191.setTransform(374.9,217.2);

	var maskedShapeInstanceList = [this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_183}]},20).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).wait(32));

	// Layer_18
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("Ag1A2QgWgXAAgfQAAgfAWgWQAWgWAfAAQAgAAAWAWQAWAWAAAfQAAAfgWAXQgWAWggABQgfgBgWgWg");
	this.shape_192.setTransform(283.4,152.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AhRBEQghgcAAgoQAAgnAhgcQAigcAvAAQAwAAAhAcQAiAcAAAnQAAAogiAcQghAcgwAAQgvAAgigcg");
	this.shape_193.setTransform(288.5,152.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AhsBSQgugiABgwQgBgvAugiQAtgiA/AAQBBAAAsAiQAuAiAAAvQAAAwguAiQgsAihBAAQg/AAgtgig");
	this.shape_194.setTransform(293.6,152.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AiIBgQg5gnABg5QgBg3A5goQA4goBQAAQBQAAA5AoQA5AoAAA3QAAA5g5AnQg5AohQAAQhQAAg4gog");
	this.shape_195.setTransform(298.7,152.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AikBuQhEgtAAhBQAAhABEgtQBEgtBggBQBhABBDAtQBFAtAABAQAABBhFAtQhDAuhhAAQhgAAhEgug");
	this.shape_196.setTransform(303.8,152.2);

	var maskedShapeInstanceList = [this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_192}]},23).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).wait(33));

	// Layer_17
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgqArQgSgSAAgZQAAgZASgRQARgSAZAAQAaAAARASQASARAAAZQAAAZgSASQgRASgaAAQgZAAgRgSg");
	this.shape_197.setTransform(285,206.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AhHA2QgegWAAggQAAgfAegXQAegWApAAQArAAAdAWQAeAXAAAfQAAAggeAWQgdAXgrAAQgpAAgegXg");
	this.shape_198.setTransform(288.7,205.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AhkBBQgpgaAAgnQAAgmApgbQAqgbA6AAQA8AAApAbQAqAbgBAmQABAngqAaQgpAcg8AAQg6AAgqgcg");
	this.shape_199.setTransform(292.4,205);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AiCBNQg0ggAAgtQAAgsA0ggQA2ggBMAAQBMAAA1AgQA2AgAAAsQAAAtg2AgQg1AghMAAQhMAAg2ggg");
	this.shape_200.setTransform(296.2,204.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AifBYQhAgkAAg0QAAgzBAgkQBCglBdABQBdgBBBAlQBCAkAAAzQAAA0hCAkQhBAlhdgBQhdABhCglg");
	this.shape_201.setTransform(299.9,203.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("Ai7BjQhNgpAAg6QAAg6BNgpQBOgoBtAAQBuAABNAoQBOApAAA6QAAA6hOApQhNAqhuAAQhtAAhOgqg");
	this.shape_202.setTransform(303.6,202.8);

	var maskedShapeInstanceList = [this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_197}]},20).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).wait(35));

	// Layer_16
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgyAyQgUgUAAgeQAAgcAUgVQAVgVAdAAQAdAAAVAVQAVAVAAAcQAAAegVAUQgVAVgdAAQgdAAgVgVg");
	this.shape_203.setTransform(288.2,250.7);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgGCVQgRgLgMgMQgOgMgKgjQgSglABg3IAAgBQAAg4ATglQAMgkAQgHQANgIAQADIAIADQAKAEAIAIQATALAOAvIADAJQAPAcAAA7IAAATQgDAtgQAeIgGAMQgQAkgbABQgIgDgHgFg");
	this.shape_204.setTransform(287.3,241.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAGDzQgJgGgKgLQgWgVgMgVQgNgSgJg6QgOg3ABhRIAAgBQABhTAQg0QAMg8ARgJQASgOAWAHQAHADAGAEQANAIAIAOQATATAMBOIACAMQAMAlAABcIAAAcQgCBDgPArQgDALgDAIQgSA7ghAAIgDAAg");
	this.shape_205.setTransform(286.4,232);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AADFKQgKgKgNgQQgagggMgeQgNgYgHhSQgMhHAChtIAAAAQAChuAOhEQAMhTARgMQAXgTAdAMQAJADAHAGQARAMAJAVQARAaAKBuIACAQQAJAuAAB9IAAAkQgCBagNA3QgDAPgDAMQgTBRgpAAIgFAAg");
	this.shape_206.setTransform(285.5,222.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAAGgQgMgOgQgVQgdgrgNgmQgNgfgFhpQgIhXACiJQACiIANhUQALhrASgOQAcgYAjAPQAMAFAJAIQATAQAKAcQAQAhAICNIACAVQAGA1AACfIAAAsQgBBwgMBFIgGAiQgVBngwAAIgHAAg");
	this.shape_207.setTransform(284.6,213.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgCH2QgPgRgRgaQgig2gOgvQgLglgEiAQgFhpADijIAAAAQACijALhkQALiCATgQQAggeAqAUQAOAGALAJQAXAUAKAjQAPApAGCrIABAZQAEA/AADAIAAA0QgBCHgLBRQgDAXgDASQgXB+g3AAIgIgBg");
	this.shape_208.setTransform(283.6,204);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgFJNQgQgVgUggQgmhAgOg3QgUhOAImtQAIm9AiggQAlgjAxAXQAxAXARA9QAOA0AEDkQABBQAAEVQAADIgQBjQgYCVg/AAIgKgBg");
	this.shape_209.setTransform(282.7,194.7);

	var maskedShapeInstanceList = [this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203}]},17).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).wait(37));

	// Layer_14
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgmAnQgPgQAAgXQAAgWAPgQQAQgPAWAAQAXAAAQAPQAPAQAAAWQAAAXgPAQQgQAPgXAAQgWAAgQgPg");
	this.shape_210.setTransform(307.3,273.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgYBbQgOgBgKgQQgLgOgJgOIgGgMQgMgUABglIAAAAQAAgVAFgTQABgGAFgFQAGgHAHgEQAIgEAGgBQAHgBAEACQALgBAZAMQANAEANAHQATALAOAMQARAQAEAIQAFAMABAOQAAAHgBAFQgBAHgCAFQgIAUggATIgGADQgjATgVAAIgEAAg");
	this.shape_211.setTransform(307.4,272.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgxCFIAAAAQgRgDgMgdIgUgrIgHgRQgNgbABg3IAAgBQABgdAFgbQAAgJAIgIQAIgHALgFIABgBQALgEAJAAQAKAAAFAGQAKAEAmAYQAQAIATAMQAaARATARQAaAXAEAIQAHAQABAUQAAALgCAIQgBAKgFAGQgOAVgzAaIgIADQg1AZgbAAIgGAAg");
	this.shape_212.setTransform(307.5,271.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AhKCvIAAAAQgVgFgNgqIgVg7IgHgWQgPgiAChJIAAgBQACglAEgkQABgLAKgKQAKgKAPgFIABgBQAPgFAMACQAOACAEAJIA9AsQATAMAZARQAhAYAYAUQAkAfADAJQAJAUAAAaQABAPgDAKQgCANgIAHQgTAXhGAfIgLAFQhIAfgfAAIgIAAg");
	this.shape_213.setTransform(307.6,269.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AhiDZIgBAAQgYgHgOg2IgVhLIgJgbQgPgpAChcIAAgBQACgtAEgsQAAgOANgMQAMgLATgGIABgBQAUgFAPACQAQAEAGAMQAJANA/AwIA0AmQAqAfAcAYQAtAmAEAIQAKAaABAfQAAATgDANQgEAPgJAIQgZAZhaAmIgMAFQhdAmgkAAIgIgBg");
	this.shape_214.setTransform(307.6,268.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("Ah7EDIgBgBQgbgHgQhDQgMg2gKglIgJghQgRgvADhuIAAgCQADg1AEg1QgBgQAQgPQAPgMAWgHIABAAQAYgGARADQAVAFAFAQQAJASBMA8IA8AvQAyAlAgAcQA4AuADAHQAMAfABAmQAAAWgEAPQgFASgLAKQgfAbhtArIgPAGQhwAsgpAAIgJgBg");
	this.shape_215.setTransform(307.7,267.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AiUEtIgBgBQgegJgShQQgMhAgKgqIgKgmQgSg2ADiBIAAgCQADg9AFg9QgCgTATgRQARgOAagHIACgBQAbgGAUAFQAYAGAGATQAIAXBYBIIBGA3QA5AsAlAgQBBA1ADAIQANAkACArQAAAagFASQgFAVgOAKQglAdiAAyIgRAGQiEAygtAAIgLgBg");
	this.shape_216.setTransform(307.8,266);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AitFYIgCgBQghgLgShdQgNhKgKgvQgGgagGgSQgTg9AEiTIAAgCIAIiLQgCgWAWgTQAUgPAdgIIACgBQAfgHAXAGQAbAIAGAXQAJAbBkBUIBOBBQBBAyAqAkQBKA8ADAJQAPAoABAxQABAegGAUQgGAYgRALQgqAfiTA3IgUAIQiWA4gyAAIgNgBg");
	this.shape_217.setTransform(307.9,264.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AjIGBQgkgNgUhpQgUiDgQg3QgUhFAEinIAJicQgDgYAZgVQAWgSAjgIQAjgIAaAIQAeAJAHAaQAKArDGCeQDICgAFAOQARAtABA2QADBJgjAXQgzAii5BEQioA+g4AAQgKAAgHgCg");
	this.shape_218.setTransform(308,263.4);

	var maskedShapeInstanceList = [this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_210}]},10).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).wait(42));

	// Layer_13
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgmAmQgPgQAAgWQAAgWAPgPQAQgQAWAAQAWAAAQAQQAQAPAAAWQAAAWgQAQQgQAQgWAAQgWAAgQgQg");
	this.shape_219.setTransform(203.2,283.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAhBmIgMgBQgXgCgagLQgQgHgNgJQgLgGgHgHQgNgMgLgTIgJgUQACg0ARgaQAFgJAGgEQANgKAUgEQAQgEATAAQAJgBAJABIAXACQADAAAIgCQAEgBAEADIASAMIACABQAQANAMALQAGAGADANQADAMgBAQIAAAMQgBALgGAgQgDAOgJAMQgFAIgHAIQgTAUgZAAIgBAAg");
	this.shape_220.setTransform(201.5,280.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AA6CaIgRgCQgjgFgngQQgagKgSgLQgSgKgMgJQgSgPgWgdIgRgdQAFhRATglQAGgPAIgGQATgNAfgHQAYgFAegBIAcABQAVABAOgCIAQgFQAGgCAHACQAKAEASAOIAEADIAsAgQAKAIAEAVQAFAQAAAaIgBATIgIBCQgDAVgLATQgHANgKAMQgbAggiAAIgGAAg");
	this.shape_221.setTransform(199.9,277.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("ABUDOIgXgEQgsgIg3gUQgigNgZgNQgZgNgQgMQgZgTgfgnIgZgkQAHhvAUgwQAJgWAKgHQAYgRAqgJQAigHAoAAIAlABQAdABASgFQAEAAARgIQAJgEAJADQAMAFAaASIAGAEIA8AoQANALAHAcQAGAWAAAkIgBAZIgIBZQgDAcgNAbQgJARgOARQgjArgrAAIgKAAg");
	this.shape_222.setTransform(198.2,274.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("ABuECQhAgJhZghQhXgggngcQgggXgogxIghgsQAOjRAogcQAegVA1gLQA9gMBOAEQAlACAWgHIAbgNQAKgFAMAEQAPAFAhAXQAvAgAmAWQAQAMAJAkQAJAkgDBEIgJBwQgEA8gqA2QgrA3g1AAIgNgBg");
	this.shape_223.setTransform(196.6,272);

	var maskedShapeInstanceList = [this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_219}]},16).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).wait(40));

	// Layer_12
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_224.setTransform(257,257.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAxBVQgCACgLgJQgIgCgLgGIgggRIgFgEQgHgEgKgQQgGgIgGgKIgGgKIgLgXQgIgKgDgOQgCgJAAgIIAAgBIACgFQADgIAEgEQAHgGAMAEQAGAAAKAHQATAFAbAbIAFAEQAYAXAQAVQAOAWAEANQAFANABALIAAACQAAAJgCAEQgEAGgJABIgKAAIgGAAg");
	this.shape_225.setTransform(256.5,256.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("ABeCcQgRgBgKgHQgCABgUgTQgMgIgRgOQgegbgRgMIgGgIQgIgHgPgfIgPgcIgIgTQgJgTgHgTQgNgQgGgXQgDgOABgLIAAgBQABgGACgEQAHgNAHgDQAMgHAVANQAJAEARATQAbAUAnA2IAHAIQAiArAWAjQAVAlAHARQAHAVABAQIABAFQAAANgFAGQgFAGgLAAIgHgBg");
	this.shape_226.setTransform(256.1,254.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AB7DkQgagFgNgMQgBABgdgeQgQgOgYgXIg9g9IgIgLQgIgLgTgsIgTgpIgLgaIgVg2QgSgVgIggQgEgTABgOIAAgCQABgIADgFQALgTALgEQARgGAdAVQANAIAYAeQAiAlA0BQIAJANQAsBAAbAvQAeA1AHAWQALAcACAWIAAAFQABATgHAHQgGAGgNAAIgPgBg");
	this.shape_227.setTransform(255.7,253.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("ACYErQgigHgQgSQgCAAglgpIgyg0Qg2g4gWgaIgKgPQgIgOgYg6IgVg1IgOgiIgahGQgXgagKgpQgGgYACgRIAAgDQABgJAEgHQAPgYAOgEQAWgGAmAeQARALAeAqQApA0BCBrIAKARQA2BWAhA8QAlBDAJAbQANAkADAbIAAAHQACAYgKAIQgHAHgPAAQgJAAgNgDg");
	this.shape_228.setTransform(255.2,251.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AC1FzQgpgLgUgXQgCgBgugzIg8hCQhBhIgZggIgNgTQgIgRgchJIgZhAIgQgrIgfhUQgdgggMgxQgHgeACgUIABgDQABgMAFgJQATgdARgEQAbgGAvAmQAUAQAlA1QAxBEBOCGIAMAVQBABsAnBHQAtBTALAfQAPAsAEAhIAAAIQACAdgMAKQgJAHgQAAQgNAAgRgEg");
	this.shape_229.setTransform(254.8,250);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("ADSG6QgxgNgXgdIiAiQQhqh5gMgbQgJgVghhXIgchMIg3iWQghglgPg7QgJglAEgZQACgOAGgKQAWgiAVgEQAggHA4AwQA4AuCtEzQCfEZAYBDQASAzAEAmQAFArgQAMQgKAIgSAAQgQAAgWgGg");
	this.shape_230.setTransform(254.3,248.5);

	var maskedShapeInstanceList = [this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_224}]},13).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).wait(41));

	// Layer_11
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgoApQgQgRAAgYQAAgXAQgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRAQgYABQgXgBgRgQg");
	this.shape_231.setTransform(160.6,325.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAABAQgSgDgTgKQgNgGgNgJQgQgMgMgPQgGgLgCgQQgCgSAHgJQAOgOAQgFIAHgBQAQgJApAMQANADANAFQAUAIAPANQAfAWAEAQIADAOIABAKQACANgIAGQgLAJgQAEIgCACQgQAEgMABIgIABQgLAAgSgFg");
	this.shape_232.setTransform(156.5,323.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAyBWQgMAAglgNQgYgHgbgNQgSgJgRgLQgYgPgUgRQgJgOgEgXQgEgZANgKQAXgQAVABIAKACQAPgGA/AZQARAFASAJQAbAMAUAOQAwAdAFARQAEAKADAJIADANQADATgOAFQgRAIgYABIgDABIgNAAQgQAAgKgBg");
	this.shape_233.setTransform(152.5,320.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AA/BnQgNgCgxgUQgdgKgjgSQgXgKgWgNQgfgSgcgTQgMgSgFgdQgHgiASgKQAhgRAaAGIANAFQAPgCBUAlQAUAIAYALQAiAQAaARQBBAmAFAQQAHANADALIAFAQQAEAYgTAFQgXAHghgDIgDABQgggCgSgGg");
	this.shape_234.setTransform(148.4,318.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("ACMCGIgDABQgogGgUgJQgPgFg9gbQghgNgsgVQgcgNgbgPQgmgVgkgVQgPgVgHgjQgJgqAXgLQArgSAgALQAIADAHAFQAPABBpAyIA1AZQApATAfATQBTAuAGARQAIAPAFANQAEALACAIQAGAegYAEQgPADgSAAQgSAAgVgDg");
	this.shape_235.setTransform(144.4,315.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("ACkCeIgEAAQgwgKgXgMIhZgoQgmgRg0gZIhAggQgugWgrgZQgSgYgJgpQgMgzAdgLQA0gUAmARQAJAEAIAHQAPAFB+A9IA+AfQAwAXAlAVQBkA3AGAQQALASAGAPQAFAMACAKQAJAkgfADQgMACgOAAQgaAAgigGg");
	this.shape_236.setTransform(140.4,313.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AC9C1IgFAAQg4gNgagPQgQgJhVgpQgsgUg8gdIhKgkQg1gZgzgbQgVgbgLgwQgOg6AigMQA+gWArAXQALAGAJAIICiBSIBHAkQA3AcAqAWQB1BAAIAPQAMAVAIARQAGAOADALQAKAqgkACIgVABQgjAAgtgKg");
	this.shape_237.setTransform(136.3,310.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("ADVDNIgFgBQhBgQgcgTQgQgLhigwIh2g4IhTgoIh3g5QgYgfgNg2QgQhDAngMQBHgXAxAcQANAHAKAKQAPAMCoBWIBQAqIBtA3QCHBJAIAPQAOAXAJAUQAHAPAEANQALAvgpACIgPABQgsAAg5gOg");
	this.shape_238.setTransform(132.3,308.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("ADtDkQhNgUgggXQgagUjohwIjjhqQgbgigPg8QgShLAsgNQBlgeA8A8QASARETCPQEOCKAMAUQAeAvAJAgQANA1gvABIgKAAQgzAAhGgSg");
	this.shape_239.setTransform(128.2,305.7);

	var maskedShapeInstanceList = [this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_231}]},20).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).wait(32));

	// Layer_10
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgmAnQgQgQAAgXQAAgWAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_240.setTransform(191,324.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgBA8IgOgFQgTgIgPgOQgMgMgEgJIgGgNQgDgIAAgHQABgIAEgKIAJgPQAFgHAJgDIABAAQALgDAJgCQAMgDARAHIABAAQAZAIAPAOIAGAHQAIAIAHALQAHANACAMIAAAIIAAALQgCAKgFAGQgDAGgKACIgFADIgJADQgGAEgJAAQgLAAgQgGg");
	this.shape_241.setTransform(189.1,322.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgBBBQgJgDgJgFQgYgNgRgQQgRgRgEgJIgIgQQgFgLAAgIQAAgKAIgMQAHgMAGgGQAHgHANAAIABAAIAZAAQANgBAXAPIABABQAdAPASAQIAHAJQAKALAIAOQAKASACAOIABAJIgBAPQgCAOgFAEQgGAGgOgCIgGABIgLAAQgEACgFAAQgOAAgcgQg");
	this.shape_242.setTransform(187.2,320.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("ABPBkIgHgBIgOgDQgLAGgyggIgUgLQgdgSgTgTQgWgVgEgIIgKgVQgIgNABgJQAAgMALgPQAKgOAIgHQAHgGASADIABAAQASADAMADQAOAAAcAXIACABQAhAWAUATIAJALQALAOAJAQQAOAXADAQIABAMQABAIgCAKQgCARgIAEQgDACgFAAQgHAAgKgDg");
	this.shape_243.setTransform(185.4,317.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("ABbB4IgIgCIgRgFQgKAEg8grIgXgPQgigXgWgVQgagYgEgJQgCgHgLgRQgJgQAAgKQABgNAOgSQANgSAJgGQAIgGAXAGIABAAQAWAGAOAFQAOADAiAeIABABQAnAdAVAXIALANQAMAOALAVQAQAcAEARIACAOQABAKgCALQgDAVgJADIgGABQgJAAgQgHg");
	this.shape_244.setTransform(183.5,315.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("ABnCNIgJgDIgTgJQgKADhGg2IgagSQgmgcgYgXQgggdgDgJQgDgIgNgUQgLgSAAgMQABgOARgVQAQgUALgGQAJgHAbAKIABAAQAaAJAPAIQAPAEAoAmIABABQArAlAXAZIANAPQANARAOAXQATAiAEASQACAIABAJQAAALgBANQgEAYgLADIgEAAQgLAAgWgLg");
	this.shape_245.setTransform(181.6,313.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("ABzChIgKgFIgVgLQgJAChRhBIgdgWQgqghgbgZQgkgigDgJQgDgIgPgXQgOgVAAgMQABgQAUgYQATgXAMgGQALgGAfAMIABABQAeALARAKQAPAHAtAtIADACQAvAsAZAcIAOARQAPATAPAbQAWAmAFAUQACAJABAKQABAMgCAPQgEAcgNACIgCAAQgNAAgcgQg");
	this.shape_246.setTransform(179.7,311.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AB/C2IgLgGIgYgPQgIABhbhMIgggaQgvglgdgbQgpgngDgJQgDgIgSgbQgQgXABgOQABgQAXgbQAWgaAOgGQAMgHAiAQIACABQAiAOASANQAQAIAzA1IACACQA0AzAbAfIAPATQARAVARAeQAZAsAGAVQACAKABALQABAOgCAQQgFAggOABIgBAAQgOAAgigUg");
	this.shape_247.setTransform(177.9,309.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("ACMDKIgNgIIgagRQgIgBhlhXIgjgdQgzgqgggdQgugrgDgJQgCgJgVgeQgSgaABgOQABgSAageQAZgdAPgGQAOgGAmATIADABQAlARAUAPQARAKA4A8IACADQA5A6AdAiIAQAVQASAXAUAiQAbAwAHAXQADALAAAMQABAQgCARQgFAkgQAAIAAAAQgPAAgngZg");
	this.shape_248.setTransform(176,307);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("ADTD9QgPgBgtgeIgNgJIgdgTQgHgDhwhhIgmghQg3gvgjggQgzgvgCgKQgDgJgXggQgUgdABgPQACgUAdghQAcgfAQgGQAOgGAsAWIACABQAqAUAVARQARANA+BDIACADQA+BBAeAlIATAXQATAaAVAlQAeA0AIAZQADAMABAOQABARgCATQgFAngSAAIgBAAg");
	this.shape_249.setTransform(174.2,304.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("ADmEWQgSgBgxgiIgOgLIgggXIh/hwIgpgkQg9g0glgiQg3g0gDgJQgCgKgZgjQgXggABgQQACgVAggkQAfgiASgGQAPgGAwAZIACABQAuAXAXAUQASAOBCBLIADAEQBDBIAgAoIAUAZQAUAcAXAoQAhA6AJAaQADANABAPQACASgDAVQgGAqgSAAIgBAAg");
	this.shape_250.setTransform(172.3,302.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AD3EvQgSgCg2gmIgxglQgGgHiwidQiiiPgFgQQgCgLgcgmQgYgiABgRQACgXAjgmQAiglATgGQARgGA2AdQAyAaAYAWQATARBLBWQBHBQAiAqQAeAkAmBBQAkA+AJAcQAJAfgFAqQgGAsgUAAIgCAAg");
	this.shape_251.setTransform(170.4,300.5);

	var maskedShapeInstanceList = [this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_240}]},15).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).wait(34));

	// Layer_9
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("Ag4AwQgYgUAAgcQAAgcAYgUQAYgUAgAAQAhAAAYAUQAYAUAAAcQAAAcgYAUQgYAVghAAQggAAgYgVg");
	this.shape_252.setTransform(360.4,328.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AggBLQgUAAgOgIQgHgCgFgEQgKgGgFgHQgGgGgCgIQgCgGAAgGIAAgBIABgGQACgaAhgaQAcgWAjgIIAGgCIAVgEQARgEANAGIAPADIACAAQAKAEAHAGQAGAIAFALQAEAKABAJIAAACIAAALQgBAHgDAIQgFAPgVASQgZAVgZAGIgUAFQgOACgQAAIgFAAg");
	this.shape_253.setTransform(363,325.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AhLBXQgKAAgFgEQgOgEgHgGQgJgFgDgKQgDgGABgIIAAgBIABgIQACgbAugiQAggZAqgOIAHgEQALgEAMgGQAUgKANADQAIAAAKgCIADAAQAMgBAJAHQAJAHAHAOQAGAMABAKIABADIgBANQgBAKgCAJQgGAPgcAYIAAAAQgfAbgbAIIgXAIIgrAJQgMACgKAAQgKAAgIgCg");
	this.shape_254.setTransform(365.5,323.1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AhnBsQgRgDgJgFQgNgFgEgKQgDgHAAgKIABgBIABgJQADgbA5grIABAAQAlgdAxgVIAHgFQAMgGAOgKQAWgRAOABQAJgBAMgGIAEgBQAOgEALAHQALAHAJAQQAIANACAMIAAADIAAAQQgBALgDALQgFAPgjAfQglAggeAKIgbALIgxARQgbAJgTgBIgJABQgGAAgEgCg");
	this.shape_255.setTransform(368,320.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AhzCDQgVgCgLgEQgQgEgFgLQgEgIABgLIAAgBIACgLQADgcBFgzIABAAQArghA1gbQAFgCAFgFQAMgHAQgOQAYgYAPgBQAKgDAPgJIAEgCQARgHAMAGQANAGAMATQAJAQADANIAAADQABAIgBAKQgBANgDAMQgFARgqAkIAAAAQgsAmgfAMQgKADgUAMIg4AYQggAOgVABQgJADgGAAIgHgBg");
	this.shape_256.setTransform(370.5,317.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AiACaQgYAAgNgDQgUgDgFgMQgFgJABgMIAAgCIACgMQAEgdBRg8IABgBQAwgjA8ghQAEgCAGgHQANgJARgSQAbgeAQgEQALgFARgMIAFgDQATgLAOAGQAPAHAOAVQALARADAPIABAEIAAAUQgBAPgDANQgFASgxApIAAABQgyAsgiAOQgKADgYAOIg+AgQgkASgYAFQgNAFgHAAIgFgBg");
	this.shape_257.setTransform(373.1,314.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("Ai3CwQgXgCgHgMQgFgLABgNIAAgCIADgOQAEgdBdhFIAAgBQA2gnBCgnQAFgDAHgHQANgMATgWQAegkAQgGQALgGAUgQIAFgEQAWgOAQAGQAQAGARAYQAMATAFAPIABAFQABAJgBANQgBARgDAPQgFASg4AwIAAAAQg5AygkAQQgKAEgbARQgbAPgqAYQgpAXgZAHQgUAJgIgBIgPAAQgSAAgKgCg");
	this.shape_258.setTransform(375.6,312.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AjJDJQgbgBgHgOQgGgLABgPIAAgCIAEgPQAEgeBphOIAAAAQA7grBJgtQAFgEAIgIQAOgOATgaQAhgrARgIQAMgIAWgTIAGgFQAYgRASAFQASAGATAbQAOAUAGARIABAGQABAJgBAPQgBASgDARQgFASg/A2IAAABQhAA3gmASQgKAFgeATIhLAvQguAbgbALQgWALgJgBIgfACIgSgBg");
	this.shape_259.setTransform(378.1,309.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AjbDiQgeAAgIgPQgIgMACgRIAAgCIAEgRQAEgeB2hWIAAgBQBAguBQgzQAFgEAIgKQAPgQAVgeQAjgxARgKQAOgKAYgXIAHgGQAagVAUAGQAUAFAVAeQAQAWAGASIACAHQABAKgBAQQgBATgEATQgEAShGA9IAAAAQhGA9gpAUQgKAGghAWIhSA2QgyAggdANQgZAOgKAAQgdADgRAAIgIAAg");
	this.shape_260.setTransform(380.7,306.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AkYDsQgIgNACgSIAAgDIAFgSQAEgfCBheIABgBQBFgzBWg5QAGgEAIgLQAQgSAWgiQAmg4ASgMQAPgMAagZIAIgIQAcgYAWAFQAWAFAYAhQARAYAHATIABAHQACALgBASQgBAVgEAUQgEAThNBDIgBABQhMBCgqAWQgLAGgkAZIhZA9Qg2AlggAQQgbAQgLAAQgnAGgUgBIgEAAQgeAAgJgOg");
	this.shape_261.setTransform(383.2,304.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AkuEEQgJgOACgTIAAgEIAFgTQAFgfCNhnIABgBQBLg3Bcg/QAGgFAJgMQAQgUAYgmQApg+ASgOQAQgNAcgeIAJgIQAegbAYAFQAYAEAaAjQATAaAIAVIABAHQACAMgBATQgBAXgEAWQgEAThUBKIAAAAQhTBIgtAYQgLAGgnAcIhgBEQg6AqgiATQgeASgLABQgrAHgWABIgGAAQggAAgJgPg");
	this.shape_262.setTransform(385.7,301.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AlEEdQgKgPACgVIAAgEIAGgUQAFggCZhwIABgBQBQg6BihFQAHgFAJgOQARgWAagqQArhEATgRQARgPAeghIAJgJQAhgfAaAFQAaAEAcAmQAVAcAIAWQACADAAAFQACAMgBAVQgBAYgEAYQgEAThbBQIgBABQhZBNgvAaQgLAHgqAfQgnAbhAAwQg+AvgkAWQghAUgMACQgvAIgXABIgLABQgfAAgJgPg");
	this.shape_263.setTransform(388.3,298.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AlbE1QgLgRADgZIAGgWQAGggCmh6IC+iJQAQgPAthLQAuhLAUgTQAUgTAogsQAjgiAcAEQAcAEAeAoQAXAeAJAXQAEANgBAfQgBAagFAZQgDAUhiBWQhgBUgyAcQgWANiQBvQh+BhgaAEQgzAJgZADIgNAAQghAAgKgPg");
	this.shape_264.setTransform(390.8,296.3);

	var maskedShapeInstanceList = [this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_252}]},17).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).wait(31));

	// Layer_8
	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("Ag2AzQgWgVAAgeQAAgeAWgVQAXgVAfAAQAgAAAXAVQAWAVAAAeQAAAegWAVQgXAWgggBQgfABgXgWg");
	this.shape_265.setTransform(324.6,327.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AhIBSIgBAAQgNAAgHgFQgJgBgFgIQgFgFgDgHIgCgHQgDgRAJgWQAGgOAZgZQAVgUAbgQQANgFANgFQAtgTAbALQAFABAEACQAPAFANAKQANAIADAPQACAMgKAOQgEALgVARIgOAPQgYAXglASIgLAFQgeAPgUAAQgNAAgJgGg");
	this.shape_266.setTransform(329.3,322.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AiNB0QgIgEgGgJIgEgJQgGgUAPgfQAHgQAkgmQAagaAkgaQAQgKAPgIQA9goAfADQAHgCAEABQAWABAWAHQAXAGAEAQQAFAPgTASQgDALgiAYIgVAUQgdAcgvAjIgNAIQhBAvgXgHIgCAAQgSAIgKAAQgGACgFAAQgGAAgFgEg");
	this.shape_267.setTransform(334.1,318);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AiuCiQgLgEgJgKIgGgLQgJgXAUgpQAHgRAxg0QAggfAsglIAkgaQBLg7AkgHQAJgEAFAAQAdgEAeAEQAgADAHATQAHARgaAXQgEAJguAfQgIAGgTAVQgiAhg7AyIgPANQhRBHgYgBIgCABQgXAQgMAEQgNAHgJAAQgEAAgEgBg");
	this.shape_268.setTransform(338.9,313.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AjPDQQgPgDgKgNIgJgMQgMgaAZgzQAIgRA9hCQAlglA0gvQAWgTAUgQQBahPAogPQALgHAGgBQAkgJAlACQArAAAJAWQAJATgiAcQgEAHg6AmQgJAGgZAaQgnAohFBCIgRAQQhiBfgYAGIgDACQgcAXgOAIQgTAPgNAAIgGgBg");
	this.shape_269.setTransform(343.6,309.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AjxEAQgSgDgNgOIgKgOQgPgdAdg9QAJgSBKhPQAqgrA8g6IAvgrQBphiAtgZQANgJAHgCQAqgOAugBQA0gCAMAYQAKAWgpAgQgFAGhFAtQgLAGgeAgIh8B+IgTAUQhzB3gYANIgEADQggAfgRAMQgYAWgRAAIgFAAg");
	this.shape_270.setTransform(348.4,305.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AkSEwQgVgCgQgRIgMgQQgSgfAihHQAKgTBWhcQAvgyBFhEIA0gzQB4h2AxgiQAPgLAIgDQAwgTA3gEQA+gEAOAaQANAYgyAlQgEAFhSAzQgMAHgkAlQgxAzhbBhIgVAYQiDCOgYAUIgEAEQgmAmgTASQgfAdgUAAIgDAAg");
	this.shape_271.setTransform(353.2,300.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AkzFfQgYgBgTgSIgOgSQgVgjAnhQQAPgeDfjmQDljuArgTQA3gYA/gHQBIgHAQAdQAPAag5AqIhjA9QggATiyDJQjADagIAHIhABEQglAkgYAAIgBAAg");
	this.shape_272.setTransform(357.9,296.3);

	var maskedShapeInstanceList = [this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_265}]},13).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).wait(40));

	// Layer_5
	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgQALgMQAMgLAQAAQAQAAAMALQAMAMAAAQQAAAQgMAMQgMAMgQAAQgQAAgMgMg");
	this.shape_273.setTransform(257.4,363.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAnA2IgEAAQgOgGgKAAIgKgEQgQgFgTgTIgHgHQgMgNgIgPIAAgCQgCgHAAgJIAAAAQAAgKADgFQADgEAEgBQAHgEAIADIADAAQAOgDAVAOQALAFALAJQAKAIAIAKQAVAZABAOIABAFIABAGIAAAFIgBACIgEAFQgDADgEACIgCAAIgDAAQgEAAgEgCg");
	this.shape_274.setTransform(255,360.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("ABBBcQgGgBgKgKIgFgDQgUgUgKgCQgFgCgIgFQgTgLgbgeIgKgJQgRgTgNgWIAAgDQgDgJAAgMIAAgBQAAgQAFgFQAFgFAIACQALAAAKAKIAEADQAQAEAeAcQANAJANAPQAOAOALANQAfApAAANIADAGIACAJQABAFgBADQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgIAFQgFAEgGAAIgDgBg");
	this.shape_275.setTransform(252.7,357);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("ABUCCIgDgBQgIgDgOgSIgGgGQgZghgMgEQgFgDgJgIQgWgQglgoIgMgOQgWgZgSgaIAAgEQgDgNAAgPIAAgBQAAgWAGgFQAIgGALAFQAPADANASIAFAGQASAKAlAqQAQAOAQAUQARATAOASQAoA5ABALIADAJIAEALQACAGgBADQgBABAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgLAGQgFADgGAAIgFgBg");
	this.shape_276.setTransform(250.4,353.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("ABkCoIgEgCQgKgGgRgYIgHgJQgfgugMgHQgGgEgLgLQgZgVgtgyIgPgSQgbgfgWggIgBgFQgEgPABgTIAAgBQAAgbAHgGQALgGAOAHQATAHAPAZIAGAJQAUARAtA3QASAUAUAZIAlAuQAyBJABAKIAEALIAFANQACAHgBAEQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgOAHQgFACgGAAQgEAAgFgCg");
	this.shape_277.setTransform(248.1,350);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AB0DOIgFgDQgLgIgUggIgJgLQglg8gMgIIgTgTQgdgbg1g9IgSgVQgfgkgcgmIgBgGQgEgSAAgWIAAgCQAAghAKgGQAMgHASAKQAWALATAhIAHALQAWAYA0BFQAVAYAXAeQAYAfASAaQA9BYAAAJIAGANIAGAPQACAJgBAFQAAADgDABIgSAHQgFACgFAAQgHAAgHgDg");
	this.shape_278.setTransform(245.8,346.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("ACED0IgGgEQgNgLgXgmIgJgOQgshKgMgKIgWgXQgfggg/hIIgUgZQgkgqghgrIgBgHQgEgUAAgaIAAgDQAAgmALgGQAPgIAVANQAaAOAVApIAIANIBUByIAyBAIAwBDQBGBoABAIIAGAOIAIASQADAKgBAFQgBAEgEACIgUAIIgKABQgJAAgKgEg");
	this.shape_279.setTransform(243.5,343.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("ACUEaIgHgFQgPgNgaguIgKgRQgxhXgOgMIgYgaQgigmhHhTIgYgcQgogwgmgxIgBgHQgFgXAAgeIAAgDQABgrAMgHQASgJAYAQQAeARAXAxIAJAQIBeCHIA4BKIA2BNQBQB3ABAGIAHARQAIASAAACQAEALgBAGQgBAFgEABQgPAHgJACIgKABQgLAAgMgFg");
	this.shape_280.setTransform(241.2,339.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("ACkE/IgIgGQgQgPgdg1IgMgTQg3hlgOgOIgageQglgrhQheIgagfQgtg2grg3IgCgIQgFgaAAghIAAgDQABgxAOgHQAUgKAbASQAiAWAaA4IAKASQAcAtBMBvIA9BVIA8BWQBaCGABAGIAIASIAKAXQAEAMgBAHQgBAFgFACQgRAHgKACIgKABQgOAAgOgHg");
	this.shape_281.setTransform(238.9,336.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AC0FlIgJgHQgSgSghg7IgMgWQg9hygOgRIgdgiIiBiZIgdgiIhhh4IgCgKQgGgcABgkIAAgEQAAg3AQgHQAXgKAeAUQAmAZAcBBIALAUQAeA0BUB8IBCBgIBCBgQBkCVABAFIAJAUIALAZQAFAOgBAHQgCAGgFACQgTAHgMADIgKABQgQAAgPgJg");
	this.shape_282.setTransform(236.6,332.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("ADDGLIgJgIQgTgUglhDIgNgZQhDh/gPgTIgegmIiNipIgggmIhriDIgCgKQgGgfAAgoIAAgEQABg9ARgHQAZgLAhAXQArAcAfBIQAEAKAIAOQAgA6BbCKIBIBqIBIBqQBuClABADIAKAXQAMAZAAACQAFAPgBAIQgCAGgFACQgWAIgMADIgLABQgRAAgTgKg");
	this.shape_283.setTransform(234.3,329.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("ADUGxIgKgJQgWgXgnhJIgOgcQhJiNgPgVIghgpIiZi6IgigpIh1iOIgDgMQgGghAAgsIAAgEQABhCATgIQAbgMAlAaQAuAgAhBQIANAaQAjBBBjCYIBNB0IBOB0IB5C2IALAYIANAeQAGAQgBAJQgCAHgGACQgYAJgOACIgLABQgTAAgUgLg");
	this.shape_284.setTransform(232,325.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("ADkHWIgLgJQgbgeg2hrQhPiagQgXQgdgpiqjOIikjGIgDgNQgHgmABgyQAAhHAVgJQAegMAoAdQAyAjAkBYIAOAcQAxBhCxELIDWFDIAbA6QAHARgCAKQgCAHgHACQgZAKgPACIgLABQgWAAgWgNg");
	this.shape_285.setTransform(229.7,322.2);

	var maskedShapeInstanceList = [this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_273}]},3).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).wait(45));

	// Layer_4
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAAMALQALAMAAAOQAAAPgLAMQgMALgPAAQgOAAgMgLg");
	this.shape_286.setTransform(253.6,363.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AhFBPQgBAAAAAAQgBABAAgBQgBAAAAAAQgBAAAAgBIgEgGIgBgFIABgBIABgDQAMgfAUgcQALgMALgLQANgOAMgKQAfgdAOACIADAAQACAAACgHQADgEACABQADAAAGADQAHADADAHIAAADQAAAHgDAIIgKASQgIAPgKANQgXAdgYARQgaAXgUAFQgOALgGAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_287.setTransform(257.7,356.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AhuCWIgHgKQgDgDABgEIABgCIACgEQAYgvAfgtQAPgWAQgSQATgaARgSQAvg7AQgHIAEgDQADgCADgQQACgMAEgBQAFgDAMADQAMADAFALQABACAAAEQAAAJgHAOIgQAbQgNAXgPAWQgiAwggAhQgnAugbAVQgjAogEgEIgEACQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_288.setTransform(261.7,350);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AiTDdIgKgNQgEgEABgGIABgCIADgGQAkg/Apg+IApg6QAZgjAVgcQBAhYASgQIAFgFQADgFAEgZQADgUAFgDQAHgGARADQASADAHAOQACADAAAGQAAAMgKATIgWAlQgTAggUAdQguBEgoAxQgzBFgjAlQgxBBgFgCQgDADgDAAQgDAAgCgCg");
	this.shape_289.setTransform(265.8,343.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("Ai4EkIgNgPQgFgGABgHIABgDIAFgHQAvhPA0hQIAyhLIA6hSQBPh1AVgZIAFgJQADgHAFgjQAEgaAGgGQAKgJAWADQAYADAJASQADAEAAAHQgBAQgNAYIgcAuIgxBOQg6BXgwBBQhABcgqA2Qg/BZgGABQgFAEgEAAQgDAAgDgDg");
	this.shape_290.setTransform(269.9,336.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AjdFrIgQgSQgHgHABgIIACgEIAGgJQA7hfA+hhIA8hcIBEhmIB3i0IAGgLQADgKAGgsQAFgiAHgIQAMgMAbADQAeADAMAVQADAFAAAJQgBATgQAeIgjA3Ig7BeQhFBrg5BRQhMBzgyBGQhMBxgIAEQgFAFgFAAQgEAAgEgDg");
	this.shape_291.setTransform(274,329.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AkCGzIgTgWQgJgIACgJIACgFIAHgKICQjhIBFhtIBPh6QBwiwAZgrIAGgOQAFgMAGg1QAFgqAJgKQANgOAhACQAkADAOAYQAEAHAAALQgBAVgTAjIgqBBIhFBvIiRDfIiSDgQhbCKgIAHQgHAGgGAAQgEAAgFgDg");
	this.shape_292.setTransform(278.1,323.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AkmH6IgXgZQgMgLAGgOIAJgLQB6i+B7jCQD1mFAHgbQAEgOAHg/QAGgxAKgMQAQgSAmADQApACARAcQAPAYgiA9IgwBLQn3MfgVAVQgIAIgIAAQgFAAgEgEg");
	this.shape_293.setTransform(282.1,316.3);

	var maskedShapeInstanceList = [this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_286}]},3).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).wait(50));

	// Layer_3
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape_294.setTransform(255.2,364);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgdA1IgBgBIgBgBIAAgDIADgWIAGgWQAFgOAHgLIAHgKQAKgTAIAAIACAAQABgCAAAAQABgBAAAAQAAgBABAAQAAABABAAIAAABQAAgBAAABIACAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAABIACAAIACAAIABABIAAABIACAIQABAFgCAEIgDAGIgEAJIgDAMQgIARgLASIAAABQgKARgIABQgDAFgCgCIgCACIgDABIAAABIgDgCg");
	this.shape_295.setTransform(255.3,358.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgeBpIgCgBIgCgBIABgGIAEghIAFgiQAEgYAGgUIAHgTQAJgmAHgIIACgDQACgLABACIgBgCIAAgCIADgDIADgEIAFgCQABgBAAAAQABgBABAAQAAAAAAAAQABAAAAABIABADIABABQADAGABAGQABAHgCAGIgFAJQgEAFgBAIIgDAUIgQA/IgBABQgJAjgHAKQgCAOgCAAIgDAIIgEAGIgBAEIgBAAIgEgCg");
	this.shape_296.setTransform(255.5,353.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgfCeIgDgCIgCgBQABgDgBgFIAGgtIAEgtIAJg/IAGgcQAIg6AGgPIABgGIADgQIgBgEQgBgGABABQACgBACgFIAEgIQACgCAFgDQAFgCABABIACAFIABACQAFAHABAIQADAKgEAHIgHAMQgEAHgCALIgCAbIgPBbIAAACQgIA0gGAUQgCAWgBABQgBAHgDAIIgFALIgCAHIgBABIgHgCg");
	this.shape_297.setTransform(255.6,348.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AggDSIgEgCIgDgBQACgEgBgGIAHg4QABgdACgdQADgrAFgoIAEgkQAHhNAGgXIACgIIACgYQgBABAAgGQgCgIABAAQABgCADgHIAGgMQACgDAHgEQAGgDABABIAEAHIABACQAGAJACAKQADAMgEAKIgKAPQgFAIgBAOIgCAjIgNB2IAAADQgGBFgGAeIgCAhQgBAKgDALIgHAQIgDALIgCAAIgIgCg");
	this.shape_298.setTransform(255.8,343.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AggEHIgFgCIgEgCQACgFgBgHQAHgxABgTIAChFIAGhmIAEgtQAGhgAFgfIACgLIADgfIAAAAIAAAAQgBACgCgJQgDgLABAAQADgCAEgJIAFgRQADgEAJgFQAIgEABACIAFAIIABADQAHAKADAMQAEAPgFALIgMASQgGAJgBARIgCArIgKCSIAAADQgGBXgEAnIgCAsQAAANgEAOIgJAWIgDANIgDABIgJgCg");
	this.shape_299.setTransform(256,338.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AggE8IgHgDIgEgDQACgFgBgIQAIg5ABgWIAChSQABg+ADg6IADg3QAFhzAEgnIACgNIADgmQgCADgDgLQgCgOABgBQADgDAEgLQAGgRACgDQACgGALgGQAKgGACADIAEAKIACADQAJALAEAPQAEASgGANIgNAUQgIALAAAUIgCAzIgICuIgBADIgICZQgBAvAAAHQAAAQgFARQgCAKgHARIgEAQQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgGgCg");
	this.shape_300.setTransform(256.1,333.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AghFxIgIgDIgFgEQADgFgBgKQAJhCABgZIABheIADiKIAChAQADiGAEgvIACgQIADguQgDAEgDgNQgDgQABgCQAEgEAFgNQAGgUADgEQADgHAMgHQALgHADAEIAFALIACAEQAKAMAFARQAFAUgHAQIgPAXQgJAMAAAXIgCA6IgGDKIAAAEIgGC0IgBA/QABAUgGAUQgDAMgIAUIgFAUQgBACgEAAIgLgCg");
	this.shape_301.setTransform(256.3,328);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgiGlIgJgDIgFgEQACgGgBgLQALhLAAgbIABhqQAAhRABhNIAChJQABiZAEg3IABgSIADg1QgDAEgDgPQgEgTABgCQAFgEAFgQQAHgXADgFQAEgIANgIQAOgIACAEIAHANIACAEQALAOAGATQAGAXgIARIgSAaQgJAOAAAaIgCBCIgEDlIAAAFIgEDPIAABJQABAXgHAXQgDAOgJAXIgFAXQgCACgEAAQgFAAgIgCg");
	this.shape_302.setTransform(256.5,322.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgiHaIgKgEIgHgEQAEgHgCgMQAMhTABgfIgBh2IAAiwIABhSQAAitADg+IABgWIADg7QgDAEgEgRQgFgVACgDQAFgFAGgRQAIgbADgGQAFgJAPgJQAOgJADAEIAIAPIACAFQANAPAGAWQAHAYgJAUIgUAdQgKAPAAAdIgBBJIgCEBIAAAFIgCDqIAABUQACAagIAaQgEAQgJAbIgGAaQgCACgFAAQgGAAgIgCg");
	this.shape_303.setTransform(256.6,317.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgjIOIgLgEIgHgEQADgIgCgOQAOhcAAghIgBiCIgCjDIAAhbQgBjAAChGIABgYQAEhBgBgCQgDAEgFgTQgFgXACgDQAFgGAHgUQAJgdADgHQAFgKASgLQAQgJADAEIAIARIADAFQAOARAHAXQAIAcgKAVIgWAfQgLARAAAgIgBBRIAAEdIAAAGIAAEFIABBdQACAdgJAeQgEARgKAeIgHAeQgCADgGAAQgGAAgJgDg");
	this.shape_304.setTransform(256.8,312.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgkJDQgUgGAAgDQAEgJgCgPQAPhkAAgkIgFlkQgElYADhIQAEhIgBgCQgEAEgFgVQgFgaABgDQAGgHAHgVQAKghAEgIQAGgLATgMQARgKAEAFIAMAXQAQATAHAZQAJAegLAXIgYAjQgMASAAAjIACGRQACFtACAhQACAggKAhQgFATgLAiIgHAgQgCAEgHAAQgHAAgKgDg");
	this.shape_305.setTransform(257,307.5);

	var maskedShapeInstanceList = [this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_294}]},2).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).wait(47));

	// Layer_7
	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgdAdQgNgMAAgRQAAgQANgMQAMgMARAAQASAAAMAMQANAMAAAQQAAARgNAMQgMAMgSAAQgRAAgMgMg");
	this.shape_306.setTransform(266.5,364.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgSA6QgMgCgLgEQgcgKgRgOQABgOAEgNQAFgRALgMQAQgRAmgKIACAAQAkgKARAKIAFABIATAIQAOAFADAIQABADABALQAAALgCANQgDAVgIANQgCAGgDAEQgLAKgmACIgJAAQgNAAgQgDg");
	this.shape_307.setTransform(270.9,361.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgRBSIgjgFQgrgIgigMIgBAAQACgUAFgTQAHgcAPgRQATgWA9gUIACAAQA5gSAXAIIAIABQALAEAUADQAXAEAEAIQADAEABARQAAAQgCAWQgDAfgIAUQgCAJgDAGQgKAMg/AEIgYABIghgBg");
	this.shape_308.setTransform(275.2,358.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgRBpIgvgEQg6gFgzgKIgBAAQACgbAHgZQAJgmATgWQAXgbBTgdIACgBQBOgbAcAHIALABIArAFQAgAEAHAIQAEAFABAYQAAAUgCAeQgDArgIAaQgCAMgEAIQgJAOhXAGQgYACgeAAIgXAAg");
	this.shape_309.setTransform(279.5,355.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AhMB/QhJgEhDgHIgCAAQACgiAIgfQAMgxAXgaQAaggBpgnIADgBQBiglAiAHIAPABIA2AEQAqACAIAJQAFAFABAfQABAZgCAlQgDA3gIAgQgDAQgDAJQgJAQhuAJQgrADg3AAIg7gBg");
	this.shape_310.setTransform(283.9,352.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AhYCXQhYgChUgDIgCAAQADgpAKgmQAOg7AagfQAegkB/gxIADgBQB3gvAnAGIATABIBBACQA0ABAKAKQAGAFACAnQAAAdgCAtQgDBDgIAlQgCAUgEALQgIASiHALQgzAEhCABIgkAAIgkAAg");
	this.shape_311.setTransform(288.2,349.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AkwCvIgCAAQAEgwAKgsQARhFAegkQAhgpCWg7IADgBQCMg4AtAFIAVAAIBNABQA+ABALAJQAIAHABAtQABAhgCA2QgDBOgIAsQgDAXgEANQgHAUifANQg7AEhNADIhUABIhFABIiIgBg");
	this.shape_312.setTransform(292.5,346.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AleDKQAEg2ANgyQAShQAigpQAlguCshFIADgBQChhBAyAEIAZAAIBYAAQBIgBANAKQAJAHACA0QABAmgDA9QgDBagHAyQgDAbgFAOQgHAXi2APQhEAFhZAEIhgADIjsAEg");
	this.shape_313.setTransform(296.8,343.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("Al4BwQAVhZAmgvQAogzDChOQC5hMA4ADICAgCQBRgBAPAKQARANgGClQgFCdgNAvQgJAil8ATIl8ANQAFg9ANg4g");
	this.shape_314.setTransform(301.2,341.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AmbBwQAVhZAlgvQApgzDChOQC5hMA4ADICAgCQBRgBA3AMQA5ANgSCmQgRCegKAzQgHAmm6AHIl7ANQAEg9AOg4g");
	this.shape_315.setTransform(304.7,341.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("Am/BwQAVhZAlgvQApgzDChOQC5hMA4ADICAgCQBRgBBgANQBhAPgeCmQgeCfgHA2QgEArn4gFIl7ANQAEg9AOg4g");
	this.shape_316.setTransform(308.3,341.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AnjBwQAVhZAmgvQAogzDChOQC6hMA3ADICAgCQBRgBCIAOQCKAQgqCnQgqCggEA5QgCAwo1gRIl8ANQAFg9ANg4g");
	this.shape_317.setTransform(311.9,341.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AoGBwQAVhZAlgvQApgzDChOQC6hMA3ADICAgCQBRgBCwAQQCyARg2CnQg3ChgBA8QACA1p0gdIl7ANQAEg9AOg4g");
	this.shape_318.setTransform(315.4,341.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AjADWIl8ANQAFg9ANg4QAVhZAmgvQAogzDChOQC6hMA4ADIB/gCQBRgBDZARQDaAThDCmQhCCjACBAQACAhjqAAQinAAkegRg");
	this.shape_319.setTransform(319,341.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AjkDSIl8ANQAFg9ANg4QAVhZAmgvQAogzDChOQC6hMA4ADIB/gCQBRgBECATQECAThPCnQhPCkAFBDQAEAijbAAQi5AAlYgZg");
	this.shape_320.setTransform(322.6,341.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AkIDOIl7ANQAEg9AOg4QAVhZAlgvQApgzDChOQC6hMA4ADIB/gCQBRgBEpAUQErAVhbCnQhbClAIBGQAFAjjQAAQjJAAmQghg");
	this.shape_321.setTransform(326.1,342.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AkrDLIl8ANQAFg9ANg4QAVhaAmguQAogzDChPQC6hLA4ADIB/gCQBRgCFSAWQFTAWhnCnQhnCmALBKQAFAjjJAAQjYAAnDgog");
	this.shape_322.setTransform(329.7,342.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AlPDGIl7ANQAEg9AOg4QAVhZAlgvQApgzDChOQC6hMA4ADICAgCQBQgBF6AXQF7AXhzCoQhzCnAOBNQAGAkjFAAQjlAAn3gxg");
	this.shape_323.setTransform(333.2,343);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AlgDGIl8ANQAFg9ANg4QAVhaAmguQAogzDChPQC6hLA4ADICAgCQBQgCGCAYQGCAYhTCtQhSCsgaBHQgLAfi+AAQjvABoKgyg");
	this.shape_324.setTransform(335,343);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AlzDFIl8ANQAFg9ANg4QAVhaAmguQAogzDChPQC6hLA4ADICAgCQBQgCGJAZQGJAagyCxQgxCxhCBBQgcAbi2AAQj6AAoegzg");
	this.shape_325.setTransform(336.9,343.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AmIDEIl8ANQAFg9ANg4QAVhaAmguQAogzDChPQC6hLA4ADICAgCQBRgCGPAaQGQAbgRC2QgRC2hpA7QgqAYitAAQkHAAo0g2g");
	this.shape_326.setTransform(339,343.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AmgDCIl8ANQAFg9ANg4QAVhZAmgvQAogzDChOQC6hMA4ADICAgCQBRgBGWAbQGXAbAQC8QAQC7iRA1Qg2AUikAAQkUAApMg5g");
	this.shape_327.setTransform(341.4,343.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("Am8DBIl7ANQAEg9AOg4QAVhZAlgvQApgzDChOQC6hMA4ADICAgCQBRgBGcAcQGfAcAwDBQAxDAi5AvQhAAQiZAAQkjAApmg7g");
	this.shape_328.setTransform(344.1,343.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AnZDAIl8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCGkAeQGlAdBSDFQBRDFjhApQhGANiNAAQk0AAqCg9g");
	this.shape_329.setTransform(347.1,343.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("An3C+Il7ANQAEg9AOg4QAVhYAlgwQApgzDChOQC6hMA4ADICAgCQBRgBGqAeQGtAfByDJQByDLkIAjQhLAKh/AAQlHAAqhhBg");
	this.shape_330.setTransform(350,343.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AoVC9Il8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCGyAgQGzAfCTDPQCUDPkxAdQhKAHhxAAQlbAArDhDg");
	this.shape_331.setTransform(353.1,343.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AozC7Il8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCG5AhQG6AgC0DUQC0DUlYAXQhHAFhfAAQlzAArohHg");
	this.shape_332.setTransform(356.1,344.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("ApSC5Il7ANQAEg9AOg4QAVhZAlgvQApgzDChPQC6hLA4ADICAgCQBRgCHAAiQHBAiDVDYQDVDZmBARQg9ADhMAAQmNAAsThLg");
	this.shape_333.setTransform(359.1,344.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("ApwC3Il8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCHHAjQHIAjD2DdQD2DemoALIhkABQmsAAtBhPg");
	this.shape_334.setTransform(362.2,344.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AqPC0Il7ANQAEg9AOg4QAVhYAlgwQApgzDChOQC6hMA4ADICAgCQBRgBHOAkQHPAjEWDiQEXDjnQAGIgzAAQnPAAt3hVg");
	this.shape_335.setTransform(365.2,344.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("ALzEMQn4gBuphaIl7ANQAEg9AOg4QAVhYAlgwQApgzDChOQC6hMA4ADICAgCQBRgBHVAlQHWAkE3DnQE3Don1AAIgCAAg");
	this.shape_336.setTransform(368.3,345.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AL8EPQoggHuohaIl8ANQAFg9ANg4QAVhYAmgwQAogzDChOQC6hMA4ADICAgCQBRgBHcAmQHdAlFYDsQFPDnn5AAIgdAAg");
	this.shape_337.setTransform(371.4,345.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AMFERQpIgNuohZIl8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCHjAnQHlAnF4DxQFnDmn9AAIg4gBg");
	this.shape_338.setTransform(374.5,345.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AMOEUQpvgTuphZIl7ANQAEg9AOg4QAVhZAlgvQApgzDChPQC6hLA4ADICAgCQBRgCHqAoQHrAoGaD2QF9DloBAAIhSgBg");
	this.shape_339.setTransform(377.5,346);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AMXEXQqXgZuphaIl7ANQAEg9AOg4QAVhYAlgwQApgzDChOQC6hMA4ADICAgCQBRgBHxApQHyApG7D7QGTDloDAAQgyAAg7gCg");
	this.shape_340.setTransform(380.6,346.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AMhEZQrAgfuohZIl8ANQAFg9ANg4QAVhZAmgvQAogzDChPQC6hLA4ADICAgCQBRgCH4ArQH6ApHbEAQGpDloEAAQg+AAhKgDg");
	this.shape_341.setTransform(383.7,346.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AMpEcQrngluohaIl8ANQAFg9ANg4QAVhYAmgwQAogzDChOQC6hMA4ADICAgCQBRgBH/ArQIBArH8EFQG+DloFAAQhJAAhbgEg");
	this.shape_342.setTransform(386.8,347.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AMzEeQsPgruphaIl7ANQAEg9AOg4QAVhYAlgwQApgzDChOQC6hMA4ADICAgCQBRgBIGAsQIHAsIdEKQHTDmoGAAQhTAAhrgGg");
	this.shape_343.setTransform(389.8,347.5);

	var maskedShapeInstanceList = [this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_306}]},5).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).wait(18));

	// Layer_6
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgfAfQgNgNAAgSQAAgRANgOQANgMASAAQASAAANAMQANAOAAARQAAATgNAMQgNANgSAAQgSAAgNgNg");
	this.shape_344.setTransform(239.7,364.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AACA3IgKgFQgVgJgTgQQgPgPgKgPQgEgJAAgGIgBgBQgBgFACgEQACgGAGgDQAEgEAIgEIAOgHQANgEAKgCQAQgCAOADQAOADAKAJQALAIAKANQAJAMAGAOQAGANACANIABANIAAAFQgBAFgDADQgCADgGADQgEAEgJgBIgDgBQgHACgIAAQgPAAgTgHg");
	this.shape_345.setTransform(236.4,361.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("ABMBVIgFgDQgZgBgqgXIgPgIQgcgQgagXQgWgSgSgWQgGgMgBgHIAAgBQgDgHADgHQADgHAMgCQAGgDAOgCIAVgGQATgEAOgBQAXAAATAHQATAHANANQAPAOAMATQAMASAJATQAIAUAEAQQADALAAAHIAAAIQgBAGgFAEQgDADgKADQgCACgEAAQgFAAgIgEg");
	this.shape_346.setTransform(233.1,358.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("ABiBtIgIgFQgfgIg2giIgSgNQgkgXghgbQgdgZgZgaQgIgQgCgJIgBAAQgDgKAEgIQAEgJARgBQAJgCATgBIAdgFQAagDARABQAdACAZAJQAYALAQASQARAUAPAZQAPAXALAZQAMAaAFAUQAEAOABAKIAAAJQgBAIgGAEQgEAEgPADIgEAAQgGAAgPgHg");
	this.shape_347.setTransform(229.8,356.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AB4CFIgKgHQgmgQhBgtIgXgRQgqgdgpgiQgkgdggggQgLgUgDgJIgBgBQgEgMAFgKQAGgKAVAAQANgCAYABIAkgEQAhgCAUACQAlAEAdAMQAeAOASAYQAVAaASAfQARAcAOAfQAOAgAHAYQAFARACAMIAAALQgBAKgIAFQgFAEgUADIgBAAQgHAAgWgMg");
	this.shape_348.setTransform(226.6,354.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("ACOCdIgMgJQgsgXhNg5IgbgUQgyglgwgnQgqgjgogkQgNgYgEgKIgBgCQgGgOAHgMQAHgLAaAAIAtACIArgDQAogBAYADQArAGAiAQQAkARAVAdQAXAgAVAlQAUAhAQAlQASAmAIAcQAHAUACAOQABAIgBAFQgBAMgJAGQgHAEgYADIgBAAQgHAAgcgRg");
	this.shape_349.setTransform(223.3,352.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("ACkC2IgPgKQgygfhZhEIgfgYQg5gsg4gtQgwgogvgpQgQgcgFgLIgBgBQgHgRAIgOQAIgNAgACIA1ADIAzgBQAuAAAbAEQAzAIAnATQApAVAXAiQAaAlAYArQAWAmATArQAVAtAKAgQAIAXADAQQABAJgBAGQgBAOgLAGQgHAEgdADIgBAAQgIAAghgWg");
	this.shape_350.setTransform(220,349.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AC6DQIgRgMQg4gmhlhPIgjgdIiAhlIhthbQgTgggFgMIgBgCQgIgTAJgPQAJgPAlADIA9AGIA6gBQA1ABAfAFQA6AKArAXQAvAYAaAnQAdArAbAxQAYArAWAyQAXAzAMAjQAKAaADASQACAKgBAIQgCAPgNAHQgIAEghADIgBAAQgIAAgngbg");
	this.shape_351.setTransform(216.7,347.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#454545").ss(1,1,1).p("AA6gPQgBAQgPAHQgJAFglADQgHABgvgg");
	this.shape_352.setTransform(240.1,369.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("ADQDrQhIgziiiEIkKjXQgWgmgGgNQgJgVAKgRQALgQAqADIBFAIQBsAAAzAJQCKAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_353.setTransform(213.5,344.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AD2DrQhHgzikiEIkmjJQg9gjgOgUQgQgbAtgTQAugTAwAEIBMAIQBsAAAzAJQCLAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_354.setTransform(209.6,344.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AEdDrQhIgzijiEIlFi7QhigggWgbQgZghBRgWQBRgUA1AEQAnADAuAFQBsAAAyAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_355.setTransform(205.8,344.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AFDDrQhHgzikiDIljitQiIgegeghQgggoB0gXQB1gXA6AEQAuADAuAGQBrAAAzAJQCMAZA4BVQA9BcA0BzQAtBkAJAtQACAMgBAIQgBASgPAHQgJAEgmADIAAAAQgJAAgtggg");
	this.shape_356.setTransform(201.9,344.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AFqDrQhIgzijiDImCifQitgbgmgoQgoguCXgaQCYgZBAAFQA2ADAuAGQBrAAAzAJQCLAZA4BVQA9BcA0BzQAuBkAIAtQADAMgBAIQgCASgPAHQgJAEglADIgBAAQgIAAgtggg");
	this.shape_357.setTransform(198.1,344.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AGRDrQhIgzijiDImgiRQjTgYgugwQgwgzC7gcQC7gbBFAEQA+AEAuAGQBrAAAzAJQCLAZA4BVQA9BcA0BzQAuBkAIAtQADAMgBAIQgCASgPAHQgJAEglADIgBAAQgIAAgtggg");
	this.shape_358.setTransform(194.2,344.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AG3DrQhHgzikiDIm+iDQj5gVg2g3Qg3g5DegeQDegdBLAEQBFAEAtAGQBsAAAzAJQCMAZA4BVQA9BcA0BzQAtBkAJAtQACAMgBAIQgBASgPAHQgJAEgmADIAAAAQgJAAgtggg");
	this.shape_359.setTransform(190.3,344.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AHeDsQhIgzijiEInch0QkfgTg+g9Qg/hAEBggQECgfBQAEQBMAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_360.setTransform(186.5,344.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AIFDsQhIgzijiEIn7hmQlEgQhGhEQhHhGElgiQEkgiBWAFQBUAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_361.setTransform(182.6,344.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AIrDsQhHgzikiEIoYhYQlrgNhOhLQhOhMFIgkQFIgkBaAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_362.setTransform(178.7,344.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AJDDsQhIgzijiEIoZhYQmnAMhEhUQhDhUFbgoQFcgoBbAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_363.setTransform(176.4,344.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AJaDsQhHgzikiEIoYhYQnkAkg6hbQg5hdFwgsQFwgsBaAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_364.setTransform(174,344.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AJyDsQhIgzijiEIoZhYQogA8gvhjQgvhlGDgwQGEgwBbAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_365.setTransform(171.7,344.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AKKDsQhHgzikiEIoYhYQpeBVgkhsQglhtGYg0QGXg0BbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_366.setTransform(169.2,344.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AKjDsQhIgzijiEIoZhYQqaBugah0Qgah1Grg5QGrg4BcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_367.setTransform(166.8,344.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AK7DsQhHgzikiEIoYhYQrXCGgQh8QgQh9HAg9QG/g8BbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgIAAguggg");
	this.shape_368.setTransform(164.3,344.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("ALUDsQhHgzikiEIoYhYQsUCfgGiEQgFiGHUhBQHThABbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgIAAguggg");
	this.shape_369.setTransform(161.8,344.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("ALtDsQhHgzikiEIoYhYQtRC4AFiOQAFiNHohEQHnhFBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgIAAguggg");
	this.shape_370.setTransform(159.3,344.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AMHDsQhIgzijiEIoahYQuMDQAPiVQAPiWH8hIQH7hJBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_371.setTransform(156.8,344.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AMgDsQhHgzikiEIoZhYQvJDpAZieQAaidIQhNQIPhNBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_372.setTransform(154.2,344.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AM6DsQhIgzijiEIoahYQwGECAkinQAkilIkhRQIjhRBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_373.setTransform(151.7,344.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("ANTDsQhHgzikiEIoZhYQxDEaAuiuQAviuI4hVQI3hVBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_374.setTransform(149.1,344.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("ANtDsQhIgzijiEIoahYQx/EzA5i3QA4i2JMhZQJLhZBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_375.setTransform(146.6,344.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AOGDsQhHgzikiEIoZhYQy8FMBDi/QBDi/JghdQJfhdBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_376.setTransform(144,344.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AOgDsQhHgzikiEIoZhYQz5FkBNjHQBOjHJ0hhQJzhhBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_377.setTransform(141.4,344.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AO6DsQhIgzijiEIoahYQ01F9BXjPQBYjPKIhmQKHhlBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_378.setTransform(138.9,344.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("APUDsQhIgzijiEIoahYQ1yGWBijYQBijXKchqQKbhpBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_379.setTransform(136.3,344.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("APtDsQhHgzikiEIoZhYQ2vGuBsjgQBsjfKxhtQKvhuBbAFQBcAFAuAFQBsAAAzAJQCMAZA4BVQA9BdA0ByQAtBkAJAuQACALgBAJQgBARgPAHQgJAFgmADIAAAAQgJAAgtggg");
	this.shape_380.setTransform(133.7,344.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AQHDsQhIgzijiEIoahYQ3rHHB2joQB3joLEhxQLDhyBcAFQBcAFAuAFQBsAAAzAJQCLAZA4BVQA9BdA0ByQAuBkAIAuQADALgBAJQgCARgPAHQgJAFglADIgBAAQgIAAgtggg");
	this.shape_381.setTransform(131.2,344.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AyLDEQCBjwLYh2QLXh2BcAFQBcAFAuAGQBsAAAzAJQCLAZA4BVQA9BcA0BzQAuBkAIAtQADAMgBAIQgCASgPAHQgJAEglADQgIABgughQhIgzijiDIoahZQwaFAkmAAQiSAAArhQg");
	this.shape_382.setTransform(128.6,345.6);

	var maskedShapeInstanceList = [this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_344}]},5).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362},{t:this.shape_352}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382},{t:this.shape_352}]},1).wait(18));

	// Layer_2
	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgJQAAgIAGgIQAHgGAJAAQAJAAAIAGQAGAIAAAIQAAAJgGAHQgIAHgJAAQgJAAgHgHg");
	this.shape_383.setTransform(254.4,363.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgEAeQgYAAgPgFQgNgEgCgEIgFgHQgDgEAAgFIgBgEIAAgBQABgDACgDQAEgFANgEIAMgGIACgBQATgDAUAAQANAAANADIAOAEQASAFABAFIACAEQABAFAAADIAAACIgBAFQgBADgEAEQgEAGgTAEQgPAFgWABIgGAAg");
	this.shape_384.setTransform(254,363.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AhGAhQgXgDgEgFIgJgLQgEgFgBgIIgBgIIAAgDQABgEAFgEQAGgFAYgGIAVgFIADgBQAggCAgABQAUABATACIAXAEQAgAHABADIADAGQADAHgBAGIgBAFIgBAGQgCAFgIAGQgGAGghAEQgYAEgkABIgKAAIgIAAQghAAgUgEg");
	this.shape_385.setTransform(253.7,363.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AhhAqQghgDgEgFIgOgPQgGgHAAgLIgCgLIAAgEQAAgGAJgFQAIgGAjgGIAegGIAEgBIBYACIA1ACIAgAFQAvAHAAADIAEAIQAEAKgBAIIgBAHIgCAJQgCAFgMAJQgIAGgwAEQghADgzAAIgOAAIgPABQgrAAgZgDg");
	this.shape_386.setTransform(253.3,364);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AitArIgRgSQgIgKgBgNQgDgQABgFQABgGALgHQALgHAugHIAsgGICzAGQBmAOAAABIAFAKQAFAMgBALIgEAUQgEAHgPALQgRALiiABIglABQh/AAgJgKg");
	this.shape_387.setTransform(252.9,364.1);

	var maskedShapeInstanceList = [this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_383}]}).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(517.1,557.6,4.6,4.6);
// library properties:
lib.properties = {
	id: '6D1797EB37724F97BFC50AAE78738E8B',
	width: 530,
	height: 393,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6D1797EB37724F97BFC50AAE78738E8B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;