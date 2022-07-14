!function(){function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./index-legacy.9a8a025b.js"],(function(t){"use strict";var i,s;return{setters:[function(e){i=e.t,s=e.m}],execute:function(){t({flattenDiagnosticMessageText:g,getJavaScriptWorker:function(){return new Promise(((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)}))},getTypeScriptWorker:function(){return new Promise(((e,t)=>{if(!F)return t("TypeScript not registered!");e(F)}))},setupJavaScript:function(e){D=K(e,"javascript")},setupTypeScript:function(e){F=K(e,"typescript")}});
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,l=(e,t,i)=>(((e,t,i)=>{t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!=typeof t?t+"":t,i),i),c={};((e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of a(t))o.call(e,l)||!i&&"default"===l||r(e,l,{get:()=>t[l],enumerable:!(s=n(t,l))||s.enumerable})})(c,s);var d=t("WorkerManager",class{constructor(t,i){e(this,"_modeId",void 0),e(this,"_defaults",void 0),e(this,"_configChangeListener",void 0),e(this,"_updateExtraLibsToken",void 0),e(this,"_extraLibsChangeListener",void 0),e(this,"_worker",void 0),e(this,"_client",void 0),this._modeId=t,this._defaults=i,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=c.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(c.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}}),u={};function g(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=g(r,t,i);return s}function p(e){return e?e.map((e=>e.text)).join(""):""}u["lib.d.ts"]=!0,u["lib.dom.d.ts"]=!0,u["lib.dom.iterable.d.ts"]=!0,u["lib.es2015.collection.d.ts"]=!0,u["lib.es2015.core.d.ts"]=!0,u["lib.es2015.d.ts"]=!0,u["lib.es2015.generator.d.ts"]=!0,u["lib.es2015.iterable.d.ts"]=!0,u["lib.es2015.promise.d.ts"]=!0,u["lib.es2015.proxy.d.ts"]=!0,u["lib.es2015.reflect.d.ts"]=!0,u["lib.es2015.symbol.d.ts"]=!0,u["lib.es2015.symbol.wellknown.d.ts"]=!0,u["lib.es2016.array.include.d.ts"]=!0,u["lib.es2016.d.ts"]=!0,u["lib.es2016.full.d.ts"]=!0,u["lib.es2017.d.ts"]=!0,u["lib.es2017.full.d.ts"]=!0,u["lib.es2017.intl.d.ts"]=!0,u["lib.es2017.object.d.ts"]=!0,u["lib.es2017.sharedmemory.d.ts"]=!0,u["lib.es2017.string.d.ts"]=!0,u["lib.es2017.typedarrays.d.ts"]=!0,u["lib.es2018.asyncgenerator.d.ts"]=!0,u["lib.es2018.asynciterable.d.ts"]=!0,u["lib.es2018.d.ts"]=!0,u["lib.es2018.full.d.ts"]=!0,u["lib.es2018.intl.d.ts"]=!0,u["lib.es2018.promise.d.ts"]=!0,u["lib.es2018.regexp.d.ts"]=!0,u["lib.es2019.array.d.ts"]=!0,u["lib.es2019.d.ts"]=!0,u["lib.es2019.full.d.ts"]=!0,u["lib.es2019.object.d.ts"]=!0,u["lib.es2019.string.d.ts"]=!0,u["lib.es2019.symbol.d.ts"]=!0,u["lib.es2020.bigint.d.ts"]=!0,u["lib.es2020.d.ts"]=!0,u["lib.es2020.full.d.ts"]=!0,u["lib.es2020.intl.d.ts"]=!0,u["lib.es2020.promise.d.ts"]=!0,u["lib.es2020.sharedmemory.d.ts"]=!0,u["lib.es2020.string.d.ts"]=!0,u["lib.es2020.symbol.wellknown.d.ts"]=!0,u["lib.es2021.d.ts"]=!0,u["lib.es2021.full.d.ts"]=!0,u["lib.es2021.intl.d.ts"]=!0,u["lib.es2021.promise.d.ts"]=!0,u["lib.es2021.string.d.ts"]=!0,u["lib.es2021.weakref.d.ts"]=!0,u["lib.es5.d.ts"]=!0,u["lib.es6.d.ts"]=!0,u["lib.esnext.d.ts"]=!0,u["lib.esnext.full.d.ts"]=!0,u["lib.esnext.intl.d.ts"]=!0,u["lib.esnext.promise.d.ts"]=!0,u["lib.esnext.string.d.ts"]=!0,u["lib.esnext.weakref.d.ts"]=!0,u["lib.scripthost.d.ts"]=!0,u["lib.webworker.d.ts"]=!0,u["lib.webworker.importscripts.d.ts"]=!0,u["lib.webworker.iterable.d.ts"]=!0;var m=t("Adapter",class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}}),h=t("LibFiles",class{constructor(t){e(this,"_libFiles",void 0),e(this,"_hasFetchedLibFiles",void 0),e(this,"_fetchLibFilesPromise",void 0),this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!u[e.path.slice(1)])}getOrCreateModel(e){const t=c.Uri.parse(e),s=c.editor.getModel(t);if(s)return s;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return c.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const r=i.getExtraLibs()[e];return r?c.editor.createModel(r.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}}),f=t("DiagnosticsAdapter",class extends m{constructor(t,i,s,r){super(r),e(this,"_disposables",[]),e(this,"_listener",Object.create(null)),this._libFiles=t,this._defaults=i,this._selector=s;const n=e=>{if(e.getLanguageId()!==s)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let i;const r=e.onDidChangeContent((()=>{clearTimeout(i),i=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():c.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(i)}},t()},a=e=>{c.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel((e=>n(e)))),this._disposables.push(c.editor.onWillDisposeModel(a)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{a(e.model),n(e.model)}))),this._disposables.push({dispose(){for(const e of c.editor.getModels())a(e)}});const o=()=>{for(const e of c.editor.getModels())a(e),n(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),c.editor.getModels().forEach((e=>n(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?c.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||c.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(c.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(c.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o,message:g(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:g(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return c.MarkerSeverity.Error;case 3:return c.MarkerSeverity.Info;case 0:return c.MarkerSeverity.Warning;case 2:return c.MarkerSeverity.Hint}return c.MarkerSeverity.Info}}),b=t("SuggestAdapter",class extends m{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const r=e.getWordUntilPosition(t),n=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const d=await l.getCompletionsAtPosition(a.toString(),o);if(!d||e.isDisposed())return;return{suggestions:d.entries.map((i=>{var s;let r=n;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),s=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);r=new c.Range(t.lineNumber,t.column,s.lineNumber,s.column)}const l=[];return-1!==(null===(s=i.kindModifiers)||void 0===s?void 0:s.indexOf("deprecated"))&&l.push(c.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:r,label:i.name,insertText:i.name,sortText:i.sortText,kind:b.convertKind(i.kind),tags:l}}))}}async resolveCompletionItem(e,t){const i=e,s=i.uri,r=i.position,n=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),n,i.label);return o?{uri:s,position:r,label:o.name,kind:b.convertKind(o.kind),detail:p(o.displayParts),documentation:{value:b.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case C.primitiveType:case C.keyword:return c.languages.CompletionItemKind.Keyword;case C.variable:case C.localVariable:return c.languages.CompletionItemKind.Variable;case C.memberVariable:case C.memberGetAccessor:case C.memberSetAccessor:return c.languages.CompletionItemKind.Field;case C.function:case C.memberFunction:case C.constructSignature:case C.callSignature:case C.indexSignature:return c.languages.CompletionItemKind.Function;case C.enum:return c.languages.CompletionItemKind.Enum;case C.module:return c.languages.CompletionItemKind.Module;case C.class:return c.languages.CompletionItemKind.Class;case C.interface:return c.languages.CompletionItemKind.Interface;case C.warning:return c.languages.CompletionItemKind.File}return c.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=p(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${_(i)}`;return t}});function _(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var y=t("SignatureHelpAdapter",class extends m{constructor(...t){super(...t),e(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case c.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case c.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case c.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(r.toString(),n,{triggerReason:y._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:p(e.documentation)},t.label+=p(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=p(i.displayParts),a={label:n,documentation:{value:p(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=p(e.separatorDisplayParts))})),t.label+=p(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}}),w=t("QuickInfoAdapter",class extends m{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=p(a.documentation),l=a.tags?a.tags.map((e=>_(e))).join("  \n\n"):"",c=p(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}}),S=t("OccurrencesAdapter",class extends m{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getOccurrencesAtPosition(s.toString(),r);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?c.languages.DocumentHighlightKind.Write:c.languages.DocumentHighlightKind.Text}))):void 0}}),v=t("DefinitionAdapter",class extends m{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>c.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let l of a){const e=this._libFiles.getOrCreateModel(l.fileName);e&&o.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return o}}),x=t("ReferenceAdapter",class extends m{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(r.toString(),n);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>c.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let c of o){const e=this._libFiles.getOrCreateModel(c.fileName);e&&l.push({uri:e.uri,range:this._textSpanToRange(e,c.textSpan)})}return l}}),k=t("OutlineAdapter",class extends m{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationBarItems(i.toString());if(!r||e.isDisposed())return;const n=(t,i,s)=>{let r={name:i.text,detail:"",kind:A[i.kind]||c.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(r.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)n(t,e,r.name);t.push(r)};let a=[];return r.forEach((e=>n(a,e))),a}}),C=t("Kind",class{});l(C,"unknown",""),l(C,"keyword","keyword"),l(C,"script","script"),l(C,"module","module"),l(C,"class","class"),l(C,"interface","interface"),l(C,"type","type"),l(C,"enum","enum"),l(C,"variable","var"),l(C,"localVariable","local var"),l(C,"function","function"),l(C,"localFunction","local function"),l(C,"memberFunction","method"),l(C,"memberGetAccessor","getter"),l(C,"memberSetAccessor","setter"),l(C,"memberVariable","property"),l(C,"constructorImplementation","constructor"),l(C,"callSignature","call"),l(C,"indexSignature","index"),l(C,"constructSignature","construct"),l(C,"parameter","parameter"),l(C,"typeParameter","type parameter"),l(C,"primitiveType","primitive type"),l(C,"label","label"),l(C,"alias","alias"),l(C,"const","const"),l(C,"let","let"),l(C,"warning","warning");var A=Object.create(null);A[C.module]=c.languages.SymbolKind.Module,A[C.class]=c.languages.SymbolKind.Class,A[C.enum]=c.languages.SymbolKind.Enum,A[C.interface]=c.languages.SymbolKind.Interface,A[C.memberFunction]=c.languages.SymbolKind.Method,A[C.memberVariable]=c.languages.SymbolKind.Property,A[C.memberGetAccessor]=c.languages.SymbolKind.Property,A[C.memberSetAccessor]=c.languages.SymbolKind.Property,A[C.variable]=c.languages.SymbolKind.Variable,A[C.const]=c.languages.SymbolKind.Variable,A[C.localVariable]=c.languages.SymbolKind.Variable,A[C.variable]=c.languages.SymbolKind.Variable,A[C.function]=c.languages.SymbolKind.Function,A[C.localFunction]=c.languages.SymbolKind.Function;var D,F,I=t("FormatHelper",class extends m{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}),L=t("FormatAdapter",class extends I{async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,I._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}}),T=t("FormatOnTypeAdapter",class extends I{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,I._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}}),P=t("CodeActionAdaptor",class extends I{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=I._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,t.span),text:t.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}}),O=t("RenameAdapter",class extends m{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const u of c){const e=this._libFiles.getOrCreateModel(u.fileName);if(!e)throw new Error(`Unknown file ${u.fileName}.`);d.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.textSpan),text:i}})}return{edits:d}}}),N=t("InlayHintsAdapter",class extends m{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return null;return{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return c.languages.InlayHintKind.Parameter;case"Type":return c.languages.InlayHintKind.Type;default:return c.languages.InlayHintKind.Other}}});function K(e,t){const i=new d(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),r=new h(s);return c.languages.registerCompletionItemProvider(t,new b(s)),c.languages.registerSignatureHelpProvider(t,new y(s)),c.languages.registerHoverProvider(t,new w(s)),c.languages.registerDocumentHighlightProvider(t,new S(s)),c.languages.registerDefinitionProvider(t,new v(r,s)),c.languages.registerReferenceProvider(t,new x(r,s)),c.languages.registerDocumentSymbolProvider(t,new k(s)),c.languages.registerDocumentRangeFormattingEditProvider(t,new L(s)),c.languages.registerOnTypeFormattingEditProvider(t,new T(s)),c.languages.registerCodeActionProvider(t,new P(s)),c.languages.registerRenameProvider(t,new O(r,s)),c.languages.registerInlayHintsProvider(t,new N(s)),new f(r,e,t,s),s}}}}))}();
//# sourceMappingURL=tsMode-legacy.ce906e00.js.map
