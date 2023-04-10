import React from 'react'
import { NewsCardForDetail, PostDetailBar, RecentNewsCard, RelatedTopics, TopStroryCard } from '../../components'
import { PostDetail } from '../../parts'

const news = {
    newsId: 5,
    title: 'Lorem ipsum dolor sit amet consectetur',
    image: 'wallpaperflare.com_wallpaper (22).jpg',
    slug: 'dolor-sit',
    category: 'lorem',
    createDate: '2023/4/10',
    authorName: 'sajad.Dy',
    shortDescription: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, a quod.',
    description: '<h1 data-block="true" data-editor="5qe5i" data-offset-key="9g57m-0-0"><div data-offset-key="9g57m-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9g57m-0-0"><span data-text="true">Discover the riches of our editor ✨</span></span></div></h1><div data-block="true" data-editor="5qe5i" data-offset-key="5mpfj-0-0"><div data-offset-key="5mpfj-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="5mpfj-0-0"><span data-text="true">Read on to better understand the functionalities you can test with this demo.</span></span></div></div><h2 data-block="true" data-editor="5qe5i" data-offset-key="au3ab-0-0"><div data-offset-key="au3ab-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="au3ab-0-0"><span data-text="true">💡 Did you know that…</span></span></div></h2><ul class="public-DraftStyleDefault-ul" data-offset-key="e4iks-0-0"><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-reset public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="e4iks-0-0"><div data-offset-key="e4iks-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="e4iks-0-0"><span data-text="true">CKEditor is </span></span><span data-offset-key="e4iks-0-1" style="font-weight: bold;"><span data-text="true">customizable</span></span><span data-offset-key="e4iks-0-2"><span data-text="true">. You can fine-tune the set of enabled plugins, available toolbar buttons, and the behavior of features.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="9d8sv-0-0"><div data-offset-key="9d8sv-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9d8sv-0-0"><span data-text="true">The editor supports </span></span><span data-offset-key="9d8sv-0-1" style="font-weight: bold;"><span data-text="true">@mentions</span></span><span data-offset-key="9d8sv-0-2"><span data-text="true">. Start typing </span></span><span data-offset-key="9d8sv-0-3" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">@An</span></span><span data-offset-key="9d8sv-0-4"><span data-text="true"> to see available suggestions.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="6g2m8-0-0"><div data-offset-key="6g2m8-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="6g2m8-0-0"><span data-text="true">You can </span></span><span data-offset-key="6g2m8-0-1" style="font-weight: bold;"><span data-text="true">paste content</span></span><span data-offset-key="6g2m8-0-2"><span data-text="true"> from Word or Google Docs, retaining the original document structure and formatting.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="a606u-0-0"><div data-offset-key="a606u-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="a606u-0-0"><span data-text="true">Thanks to Import from Word 📷, you can </span></span><span data-offset-key="a606u-0-1" style="font-weight: bold;"><span data-text="true">convert</span></span><span data-offset-key="a606u-0-2"><span data-text="true"> a DOCX document into HTML and edit it in CKEditor 5.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="9tpl4-0-0"><div data-offset-key="9tpl4-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9tpl4-0-0"><span data-text="true">You can </span></span><span data-offset-key="9tpl4-0-1" style="font-weight: bold;"><span data-text="true">export your document</span></span><span data-offset-key="9tpl4-0-2"><span data-text="true"> to PDF 📷 or Word 📷 with a single click.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="6ll90-0-0"><div data-offset-key="6ll90-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="6ll90-0-0"><span data-text="true">This demo showcases CKBox 📷 to </span></span><span data-offset-key="6ll90-0-1" style="font-weight: bold;"><span data-text="true">manage images and other files</span></span><span data-offset-key="6ll90-0-2"><span data-text="true">. You can enable your own upload adapter instead.</span></span></div></li></ul><h2 data-block="true" data-editor="5qe5i" data-offset-key="d8qo8-0-0"><div data-offset-key="d8qo8-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="d8qo8-0-0"><span data-text="true">🚀 Autoformatting in CKEditor 5</span></span></div></h2><div data-block="true" data-editor="5qe5i" data-offset-key="704o5-0-0"><div data-offset-key="704o5-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="704o5-0-0"><span data-text="true">Some features of CKEditor 5 might be hard to spot at first glance. Thanks to </span></span><span data-offset-key="704o5-0-1" style="font-weight: bold;"><span data-text="true">autoformatting</span></span><span data-offset-key="704o5-0-2"><span data-text="true">, you can use handy shortcuts in the editor to format the text on the fly:</span></span></div></div><figure data-block="true" data-editor="5qe5i" data-offset-key="99fo4-0-0"><div data-offset-key="99fo4-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="99fo4-0-0" style="font-weight: bold;"><span data-text="true">Block formatting</span></span><span data-offset-key="99fo4-0-1"><span data-text="true">Bulleted listStart a line with </span></span><span data-offset-key="99fo4-0-2" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">*</span></span><span data-offset-key="99fo4-0-3"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-4" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">-</span></span><span data-offset-key="99fo4-0-5"><span data-text="true"> followed by a space.Numbered listStart a line with </span></span><span data-offset-key="99fo4-0-6" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">1.</span></span><span data-offset-key="99fo4-0-7"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-8" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">1)</span></span><span data-offset-key="99fo4-0-9"><span data-text="true"> followed by a space.To-do listStart a line with </span></span><span data-offset-key="99fo4-0-10" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">[ ]</span></span><span data-offset-key="99fo4-0-11"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-12" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">[x]</span></span><span data-offset-key="99fo4-0-13"><span data-text="true"> followed by a space to insert an unchecked or checked list item.HeadingsStart a line with </span></span><span data-offset-key="99fo4-0-14" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">#</span></span><span data-offset-key="99fo4-0-15"><span data-text="true">, </span></span><span data-offset-key="99fo4-0-16" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">##</span></span><span data-offset-key="99fo4-0-17"><span data-text="true">, or </span></span><span data-offset-key="99fo4-0-18" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">###</span></span><span data-offset-key="99fo4-0-19"><span data-text="true"> followed by a space to create a heading 1, heading 2, or heading 3.Block quoteStart a line with </span></span><span data-offset-key="99fo4-0-20" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">&gt;</span></span><span data-offset-key="99fo4-0-21"><span data-text="true"> followed by a space.Code blockStart a line with </span></span><span data-offset-key="99fo4-0-22" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">```</span></span><span data-offset-key="99fo4-0-23"><span data-text="true">.Horizontal lineStart a line with </span></span><span data-offset-key="99fo4-0-24" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">---</span></span><span data-offset-key="99fo4-0-25"><span data-text="true">.</span></span><span data-offset-key="99fo4-0-26" style="font-weight: bold;"><span data-text="true">Inline formattingBold</span></span><span data-offset-key="99fo4-0-27"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-28" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">**</span></span><span data-offset-key="99fo4-0-29"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-30" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">__</span></span><span data-offset-key="99fo4-0-31"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-32" style="font-style: italic;"><span data-text="true">Italic</span></span><span data-offset-key="99fo4-0-33"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-34" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">*</span></span><span data-offset-key="99fo4-0-35"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-36" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">_</span></span><span data-offset-key="99fo4-0-37"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-38" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">Code</span></span><span data-offset-key="99fo4-0-39"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-40" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">`</span></span><span data-offset-key="99fo4-0-41"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-42" style="text-decoration: line-through;"><span data-text="true">Strikethrough</span></span><span data-offset-key="99fo4-0-43"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-44" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">~~</span></span><span data-offset-key="99fo4-0-45"><span data-text="true"> around your text.</span></span></div></figure><img src="http://localhost:3000/assets/img/img1.jpg" width="500"/><h1 data-block="true" data-editor="5qe5i" data-offset-key="9g57m-0-0"><div data-offset-key="9g57m-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9g57m-0-0"><span data-text="true">Discover the riches of our editor ✨</span></span></div></h1><div data-block="true" data-editor="5qe5i" data-offset-key="5mpfj-0-0"><div data-offset-key="5mpfj-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="5mpfj-0-0"><span data-text="true">Read on to better understand the functionalities you can test with this demo.</span></span></div></div><h2 data-block="true" data-editor="5qe5i" data-offset-key="au3ab-0-0"><div data-offset-key="au3ab-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="au3ab-0-0"><span data-text="true">💡 Did you know that…</span></span></div></h2><ul class="public-DraftStyleDefault-ul" data-offset-key="e4iks-0-0"><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-reset public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="e4iks-0-0"><div data-offset-key="e4iks-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="e4iks-0-0"><span data-text="true">CKEditor is </span></span><span data-offset-key="e4iks-0-1" style="font-weight: bold;"><span data-text="true">customizable</span></span><span data-offset-key="e4iks-0-2"><span data-text="true">. You can fine-tune the set of enabled plugins, available toolbar buttons, and the behavior of features.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="9d8sv-0-0"><div data-offset-key="9d8sv-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9d8sv-0-0"><span data-text="true">The editor supports </span></span><span data-offset-key="9d8sv-0-1" style="font-weight: bold;"><span data-text="true">@mentions</span></span><span data-offset-key="9d8sv-0-2"><span data-text="true">. Start typing </span></span><span data-offset-key="9d8sv-0-3" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">@An</span></span><span data-offset-key="9d8sv-0-4"><span data-text="true"> to see available suggestions.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="6g2m8-0-0"><div data-offset-key="6g2m8-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="6g2m8-0-0"><span data-text="true">You can </span></span><span data-offset-key="6g2m8-0-1" style="font-weight: bold;"><span data-text="true">paste content</span></span><span data-offset-key="6g2m8-0-2"><span data-text="true"> from Word or Google Docs, retaining the original document structure and formatting.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="a606u-0-0"><div data-offset-key="a606u-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="a606u-0-0"><span data-text="true">Thanks to Import from Word 📷, you can </span></span><span data-offset-key="a606u-0-1" style="font-weight: bold;"><span data-text="true">convert</span></span><span data-offset-key="a606u-0-2"><span data-text="true"> a DOCX document into HTML and edit it in CKEditor 5.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="9tpl4-0-0"><div data-offset-key="9tpl4-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="9tpl4-0-0"><span data-text="true">You can </span></span><span data-offset-key="9tpl4-0-1" style="font-weight: bold;"><span data-text="true">export your document</span></span><span data-offset-key="9tpl4-0-2"><span data-text="true"> to PDF 📷 or Word 📷 with a single click.</span></span></div></li><li class="public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR" data-block="true" data-editor="5qe5i" data-offset-key="6ll90-0-0"><div data-offset-key="6ll90-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="6ll90-0-0"><span data-text="true">This demo showcases CKBox 📷 to </span></span><span data-offset-key="6ll90-0-1" style="font-weight: bold;"><span data-text="true">manage images and other files</span></span><span data-offset-key="6ll90-0-2"><span data-text="true">. You can enable your own upload adapter instead.</span></span></div></li></ul><h2 data-block="true" data-editor="5qe5i" data-offset-key="d8qo8-0-0"><div data-offset-key="d8qo8-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="d8qo8-0-0"><span data-text="true">🚀 Autoformatting in CKEditor 5</span></span></div></h2><div data-block="true" data-editor="5qe5i" data-offset-key="704o5-0-0"><div data-offset-key="704o5-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="704o5-0-0"><span data-text="true">Some features of CKEditor 5 might be hard to spot at first glance. Thanks to </span></span><span data-offset-key="704o5-0-1" style="font-weight: bold;"><span data-text="true">autoformatting</span></span><span data-offset-key="704o5-0-2"><span data-text="true">, you can use handy shortcuts in the editor to format the text on the fly:</span></span></div></div><figure data-block="true" data-editor="5qe5i" data-offset-key="99fo4-0-0"><div data-offset-key="99fo4-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="99fo4-0-0" style="font-weight: bold;"><span data-text="true">Block formatting</span></span><span data-offset-key="99fo4-0-1"><span data-text="true">Bulleted listStart a line with </span></span><span data-offset-key="99fo4-0-2" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">*</span></span><span data-offset-key="99fo4-0-3"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-4" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">-</span></span><span data-offset-key="99fo4-0-5"><span data-text="true"> followed by a space.Numbered listStart a line with </span></span><span data-offset-key="99fo4-0-6" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">1.</span></span><span data-offset-key="99fo4-0-7"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-8" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">1)</span></span><span data-offset-key="99fo4-0-9"><span data-text="true"> followed by a space.To-do listStart a line with </span></span><span data-offset-key="99fo4-0-10" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">[ ]</span></span><span data-offset-key="99fo4-0-11"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-12" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">[x]</span></span><span data-offset-key="99fo4-0-13"><span data-text="true"> followed by a space to insert an unchecked or checked list item.HeadingsStart a line with </span></span><span data-offset-key="99fo4-0-14" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">#</span></span><span data-offset-key="99fo4-0-15"><span data-text="true">, </span></span><span data-offset-key="99fo4-0-16" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">##</span></span><span data-offset-key="99fo4-0-17"><span data-text="true">, or </span></span><span data-offset-key="99fo4-0-18" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">###</span></span><span data-offset-key="99fo4-0-19"><span data-text="true"> followed by a space to create a heading 1, heading 2, or heading 3.Block quoteStart a line with </span></span><span data-offset-key="99fo4-0-20" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">&gt;</span></span><span data-offset-key="99fo4-0-21"><span data-text="true"> followed by a space.Code blockStart a line with </span></span><span data-offset-key="99fo4-0-22" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">```</span></span><span data-offset-key="99fo4-0-23"><span data-text="true">.Horizontal lineStart a line with </span></span><span data-offset-key="99fo4-0-24" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">---</span></span><span data-offset-key="99fo4-0-25"><span data-text="true">.</span></span><span data-offset-key="99fo4-0-26" style="font-weight: bold;"><span data-text="true">Inline formattingBold</span></span><span data-offset-key="99fo4-0-27"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-28" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">**</span></span><span data-offset-key="99fo4-0-29"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-30" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">__</span></span><span data-offset-key="99fo4-0-31"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-32" style="font-style: italic;"><span data-text="true">Italic</span></span><span data-offset-key="99fo4-0-33"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-34" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">*</span></span><span data-offset-key="99fo4-0-35"><span data-text="true"> or </span></span><span data-offset-key="99fo4-0-36" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">_</span></span><span data-offset-key="99fo4-0-37"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-38" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">Code</span></span><span data-offset-key="99fo4-0-39"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-40" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">`</span></span><span data-offset-key="99fo4-0-41"><span data-text="true"> around your text.</span></span><span data-offset-key="99fo4-0-42" style="text-decoration: line-through;"><span data-text="true">Strikethrough</span></span><span data-offset-key="99fo4-0-43"><span data-text="true">Type </span></span><span data-offset-key="99fo4-0-44" style="background-color: rgba(0, 0, 0, 0.05); font-family: Inconsolata, Menlo, Consolas, monospace; font-size: 16px; padding: 2px;"><span data-text="true">~~</span></span><span data-offset-key="99fo4-0-45"><span data-text="true"> around your text.</span></span></div></figure>',
}

const topStores = [
    {
        newsId: 1,
        title: 'Lorem ipsum dolor sit amet consectetur',
        createDate: '2023/4/10',
    },
    {
        newsId: 2,
        title: 'Lorem ipsum dolor sit amet consectetur',
        createDate: '2023/4/10',
    },
    {
        newsId: 3,
        title: 'Lorem ipsum dolor sit amet consectetur',
        createDate: '2023/4/10',
    },
]

const recentNews = [
    {
        newsId: 1,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'img1.jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 2,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'img2.jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 3,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'img3.jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 4,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (11).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 5,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (17).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 6,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (20).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 7,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (22).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 8,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (43).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 9,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wp4026872.jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 10,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wp4026879.jpg',
        createDate: '2023/4/10',
    },
]

const relatedTopics = [
    'Lorem', 'lorem lorem', 'lorem Lorem', 'Lorem lorem', 'lorem'
]

const moreNews = [
    {
        newsId: 3,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'img3.jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 4,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (11).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 5,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (17).jpg',
        createDate: '2023/4/10',
    },
    {
        newsId: 6,
        title: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        image: 'wallpaperflare.com_wallpaper (20).jpg',
        createDate: '2023/4/10',
    },
]

const NewsDetails = () => {
    return (
        <>
            <div className='bg-s'>
                <PostDetailBar />
                <div className='container grid grid-cols-1 lg:grid-cols-3'>
                    <div className='col-span-1 lg:col-span-2'>
                        <PostDetail news={news} />


                        <div className='flex flex-col gap-6 my-8'>
                            <h3 className='text-p text-2xl font-extrabold'>
                                Related Topics
                            </h3>
                            <RelatedTopics topics={relatedTopics} />
                        </div>
                        <div className='flex flex-col gap-6 my-8'>
                            <h3 className='text-p text-2xl font-extrabold'>
                                More on this story
                            </h3>
                            <NewsCardForDetail moreNews={moreNews} />
                        </div>
                    </div>

                    <div className='col-span-1 flex flex-col gap-4'>

                        <div className='flex flex-col gap-6 my-12'>
                            <h3 className='text-p text-2xl font-extrabold'>
                                Top Stores
                            </h3>
                            <div className='flex flex-col sm:flex-row lg:flex-col justify-around gap-3 pl-3'>
                                {
                                    topStores.map(story => (
                                        <TopStroryCard story={story} key={story.newsId} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 mb-12'>
                            <h3 className='text-p text-2xl font-extrabold'>
                                Recent News
                            </h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3'>
                                {
                                    recentNews.map(news => (
                                        <RecentNewsCard news={news} key={news.newsId} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 mb-12'>
                            <h3 className='text-p text-2xl font-extrabold'>
                                Most Read News
                            </h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3'>
                                {
                                    recentNews.map(news => (
                                        <RecentNewsCard news={news} key={news.newsId} />
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsDetails