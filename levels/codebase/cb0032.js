/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var level_images = new Array();
  level_images['field'] = ['fields', 'tricky2.gif', 320, 3200, 0, 0, 0];
  level_images['door'] = ['doors', 'door4.gif', 50, 82, 24, 774, 6];
  level_images['exit'] = ['ani', 'exit5.gif', 104, 88, 136, 1986, 6]; // +88, +44
  level_images['fire1'] = ['ani', 'fire.gif', 40, 128, 280, 0, 6];
  level_images['fire2'] = ['ani', 'fire.gif', 40, 128, 280, 128, 6];
  level_images['fire3'] = ['ani', 'fire.gif', 40, 128, 280, 256, 6];
  level_images['fire4'] = ['ani', 'fire.gif', 40, 128, 280, 384, 6];
  level_images['fire5'] = ['ani', 'fire.gif', 40, 128, 280, 512, 6];
  level_images['firerock'] = ['gfx', 'firerock1.gif', 40, 160, 280, 406, 7];
  level_images['fire6'] = ['ani', 'fire.gif', 40, 128, 280, 640, 6];
  level_images['fire7'] = ['ani', 'fire.gif', 40, 128, 280, 768, 6];
  level_images['fire8'] = ['ani', 'fire.gif', 40, 128, 280, 896, 6];
  level_images['fire9'] = ['ani', 'fire.gif', 40, 128, 280, 1024, 6];
  level_images['fire10'] = ['ani', 'fire.gif', 40, 128, 280, 1152, 6];
  level_images['fire11'] = ['ani', 'fire.gif', 40, 128, 280, 1280, 6];
  level_images['fire12'] = ['ani', 'fire.gif', 40, 128, 280, 1408, 6];
  level_images['fire13'] = ['ani', 'fire.gif', 40, 128, 280, 1536, 6];
  level_images['fire14'] = ['ani', 'fire.gif', 40, 128, 280, 1664, 6];
  level_images['fire15'] = ['ani', 'fire.gif', 40, 128, 280, 1792, 6];
  level_images['fire16'] = ['ani', 'fire.gif', 40, 128, 280, 1920, 6];
  level_images['fire17'] = ['ani', 'fire.gif', 40, 128, 280, 2048, 6];
  level_images['fire18'] = ['ani', 'fire.gif', 40, 128, 280, 2176, 6];
  level_images['fire19'] = ['ani', 'fire.gif', 40, 128, 280, 2304, 6];
  level_images['fire20'] = ['ani', 'fire.gif', 40, 128, 280, 2432, 6];
  level_images['fire21'] = ['ani', 'fire.gif', 40, 128, 280, 2560, 6];
  level_images['fire22'] = ['ani', 'fire.gif', 40, 128, 280, 2688, 6];
  level_images['fire23'] = ['ani', 'fire.gif', 40, 128, 280, 2816, 6];
  level_images['fire24'] = ['ani', 'fire.gif', 40, 128, 280, 2944, 6];
  level_images['fire25'] = ['ani', 'fire.gif', 40, 128, 280, 3072, 6];
var level_start = 450;
var start_pos = [[26,800]]; // +2, +26

var level = 'a120b1379a,a120b457ab154abab164a2b16a2b580a,a121b180a3b3ab90a2b24a2b151a2b2ab2ab6ab71abab65a5b135ab26a3b16a3b69abab507a,a120b181a7b64ab8abab3a3b7a4b3a3b10ab5a4b3ab13a2b126a2b2a4ba2bab5a2ba5b3ab60a5b64a5b134a3b23a5bab9ab4a7b3ab60a5b506a,a120b181a8b48ab13a2b2ab3a5b3a4b5a6ba5b5a2ba4b2a6ba3bab9a4b3a3b7ab110a3ba8ba2b4a13b41ab17a5b60ab2a7bab3ab3ab60a4b59a4b13a2b7a7b9ab3a13b41ab17a5b505a,a119b182a8b45ab2ab5ab2ab4a7ba13b3a14b3a23b3a2b2a6ba5b5a6b3ab84a2b14a5ba8ba2b4a15b39a2b2ab2ab6ab2a7bab3a2b4ab46a2ba12ba6b59a5b47ab6ab2a7b5a3baba3b5a8b9a2ba16b39a2b2ab2ab6ab2a7bab3a2b24ab456abab13a,a121b180a8b45ab2a2b4aba2b4a84b3a12b41ab40a4b3a3b7a17b3a17b33a2b2a4ba2bab5a2ba12ba8b40ab4a24b53ab2a7b5ab38abab5a2ba12ba10b3a10b7a21b3a2b28a2b2a4ba2bab5a2ba12ba2b23a3b41ab412a5b9ab2a,a123b178a9b7a2b7a2b26a2ba2b4a4b3a102b39a2b2ab2ab6ab25a6ba5b5a19ba20b30a3ba8ba2b4a25b7ab31ab4a25b3a2b46a2ba12ba2b37aba2b4a39b7a27b26a3ba8ba2b4a18b23a5b39a2b2ab2ab387ab17a5b8a3ba,a124b176a10b7a3b5a4b24a6b3a6ba104b3a2b28a2b2a4ba2bab5a2bab22a14b3a41b12a2b14a5ba8ba2b4a26b5a2b30a2b3a32b45a19b7a2b27aba2b4a39b7a28b7a2b14a5ba8ba2b4a19b21a7b3a2b28a2b2a4ba2bab387ab3ab2ab6ab2a7bab3a5ba,a124b175a11b7a5b2a6bab21a7ba118b26a3ba8ba2b4a5b20a60b3a2b5a4b13a17b3a29b2a4b29a3ba34b7a2b35a20b5a4b3a3b7ab11a5b3a41b5a30b5a4b3a3b7a17b3a20b21a13b26a3ba8ba2b382ab2a4ba2bab5a2ba12ba,a124b175a12b5a16b21a127b7a2b14a5ba8ba2b4a5b20a60b3a4b2a6b12a18ba36b29a39b5a4b3a3b27a23b2a6ba5b5a2b11a6ba42b5a32b2a6ba5b5a19ba21b21a14b7a2b14a5ba8ba2b380a3ba8ba2b4a,a125b174a12b5a17b19a129b5a4b5ab7a17b3a6b20a60b3a14b9a56b28a42b2a6ba5b22a2ba39b3a3b11a49b5a47b3a43b19a16b5a4b3a3b7a17b378a5ba8ba2b4a,a126b174a11b5a17b19a131b2a6b4a2b5a19ba8b18a62ba15b9a57b27a57b3ab17a49b9a51b3a94b19a18b2a6ba5b5a19ba2b374a17b3a,a127b174a11b3a18b19a140b3a3b3a29b18a78b9a57b27a61b17a49b9a51b3a94b19a33b3a25b371a19ba,a127b174a11b3a19b17a142ba36b18a79b7a58b18ab7a63b15a50b9a51b3a95b17a63b364a2b3a,a128b173a11b3a19b17a180b9a2b5a80b7a59b17ab7a63b15a51b7a53ba96b17a63b348abab13a,a128b172a13ba20b17a180b9a2b5a80b7a59b17ab7a63b15a51b7a150b17a64b346a5b9ab2a,a129b170a36b15a181b9a2b5a81b5a60b16a3b5a65b13a52b7a151b15a64b347a5b8a3ba,a129b170a36b15a182b7a4b3a82b5a61b9ab5a3b5a65b13a53b5a152b15a64b330ab2ab2ab6ab2a7bab3a5ba,a129b169a37b15a182b7a4b3a82b5a61b9ab5a3b5a65b13a53b5a152b15a63b278abab14a2b34a2ba2bab5a2ba12ba,a129b169a38b13a183b7a4b3a83b3a62b9a2b3a5b3a67b11a54b5a153b13a66b196abab15ab60a5b9ab2a4b33a5ba2b4a,a129b169a38b13a184b5a6ba84b3a63b7a3b3a5b3a67b11a55b3a154b13a68b132ab60a5b9ab2a4b41ab17a5b8a3ba5b32a5ba2b4a,a130b168a38b13a184b5a91b3a63b7a3b3a5b3a67b11a55b3a154b13a69b110ab17a5b59a5b8a3ba6b39a2b2ab2ab6ab2a7bab3a5ba6b31a8b3a,a130b168a39b11a185b5a92ba64b7a4ba7ba69b9a56b3a155b11a70b110a2b2ab2ab6ab2a7b54ab2a7bab3a5ba7b3a2b28a2b2a4ba2bab5a2ba12ba14b29a9ba,a130b168a39b11a186b3a159b5a83b9a57ba156b11a70b75a2b28a2b2a4ba2bab5a2ba10b3a2b47aba12ba19b26a3ba8ba2b4a31b27a,a130b168a39b11a186b3a159b5a83b9a214b11a71b72a5b26a3ba8ba2b4a19b46a35b7a2b14a5ba8ba2b4a33b23a,a131b167a40b9a187b3a159b5a84b7a216b9a73b71a6b7a2b14a5ba8ba2b4a20b7a2b36a36b5a4b3a3b7a17b3a34b23a,a131b167a40b9a188ba161b3a85b7a216b9a74b69a8b5a4b3a3b7a17b3a22b5a4b3a3b28a39b2a6ba5b5a19ba33b27a,a130b168a40b9a350b3a85b7a216b9a74b69a10b2a6ba5b5a19ba25b2a6ba5b25a56b3a53b29a,a129b168a42b7a351b3a86b5a218b7a76b68a25b3a61b24a112b29a,a129b168a42b7a352ba87b5a218b7a76b69a87b27a110b29a,a129b167a43b7a440b5a218b7a77b69a85b29a109b29a,a130b166a44b5a442b3a220b5a78b68a86b29a109b29a,a131b164a45b5a442b3a220b5a79b66a87b29a109b29a,a132b162a46b5a442b3a220b5a80b66a86b29a109b29a,a134b159a48b3a444ba222b3a82b65a86b29a110b4ab17ab4a,a135b158a48b3a667b3a81b65a87b29a111b2a2b17a2b2a,a135b157a49b3a667b3a80b64a89b29a115b16a,a136b155a51ba669ba82b64a89b4ab17ab4a116b16a,a135b156a805b64a89b2a2b17a2b2a118b16a,a135b156a804b64a94b16a123b16a,a134b156a806b62a95b16a122b17a,a136b153a807b62a96b16a121b17a,a138b151a808b62a95b16a121b17a,a139b150a809b61a94b17a121b17a,a139b150a811b60a93b17a121b16a,a139b150a812b59a93b17a121b17a,a140b149a814b57a93b17a122b16a,a141b148a815b57a92b16a123b16a,a142b147a815b57a92b17a121b17a,a142b147a816b55a94b16a121b17a,a143b146a815b54a96b16a121b17a,a143b145a816b53a96b17a121b17a,a144b4ab139a815b55a95b17a121b16a,a145b2a2b138a98b575a145b53a95b17a121b17a,a150b137a98b575a147b51a95b17a122b16a,a150b136a99b575a148b51a94b16a123b16a,a151b134a100b575a148b51a94b17a121b17a,a146b2a3b133a101b575a148b50a96b16a121b17a,a145b139a101b575a149b48a97b16a121b17a,a146b139a110b29a685b48a96b17a121b17a,a145b141a109b29a686b46a97b17a121b16a,a143b144a108b29a687b45a97b17a121b16a,a142b145a108b29a686b45a98b17a122b16a,a141b147a107b29a687b45a97b16a123b16a,a141b147a108b27a688b45a97b16a122b17a,a141b148a109b23a691b44a98b16a121b17a,a135b3a4b147a109b23a692b42a99b16a121b17a,a134b6ab148a109b23a692b42a98b17a121b17a,a133b156a107b27a691b40a99b17a121b16a,a133b156a106b29a691b39a99b17a121b17a,a132b157a106b29a690b39a100b17a122b16a,a133b156a106b29a691b39a99b16a123b16a,a132b157a106b29a692b38a99b17a121b17a,a131b158a106b29a691b39a100b16a121b17a,a132b157a106b29a692b37a101b16a121b17a,a131b159a105b29a692b36a101b17a121b17a,a130b160a106b4ab16a2b4a694b35a101b17a121b16a,a130b160a107b2a2b16a3b2a696b34a101b17a121b17a,a129b161a112b16a702b32a101b17a122b16a,a129b161a112b16a703b30a102b16a123b16a,a117b3a6b164a111b17a703b29a103b17a121b17a,a116b174a111b17a703b29a104b16a121b17a,a112b177a112b17a704b27a105b16a121b17a,a110b179a112b17a704b25a106b17a121b17a,a109b180a112b16a706b24a106b17a121b16a,a108b181a112b17a706b22a107b17a121b16a,a107b182a113b16a705b23a107b17a122b16a,a106b184a112b16a705b23a107b16a123b16a,a106b184a111b17a703b27a105b16a122b17a,a105b185a111b17a702b29a105b16a121b17a,a105b184a112b17a702b29a105b16a121b17a,a105b184a112b17a702b29a104b17a121b17a,a105b184a112b16a703b29a104b17a121b16a,a104b185a112b17a702b29a104b17a121b17a,a104b185a113b16a702b29a104b17a122b16a,a104b185a113b16a702b29a104b16a123b16a,a98b3a3b185a112b17a703b4ab17ab4a105b17a121b17a,a97b6ab184a113b17a704b2a2b17a2b2a107b16a121b17a,a96b192a113b17a708b16a112b16a121b17a,a96b192a113b17a708b16a111b17a121b17a,a95b193a113b16a710b16a110b17a121b16a,a96b192a113b16a710b16a110b17a121b17a,a95b193a114b16a708b17a110b17a122b16a,a94b194a114b16a708b17a110b16a123b16a,a95b193a113b17a708b17a110b17a121b17a,a94b194a113b17a708b17a111b16a121b17a,a94b280a27b17a708b16a111b17a121b17a,a94b280a27b17a708b17a110b17a121b17a,a94b280a27b16a710b16a110b17a121b16a,a93b281a27b17a709b16a110b17a121b16a,a92b282a28b16a708b17a110b16a123b16a,a92b282a28b16a597ia110b17a110b16a123b16a,a91b281a29b17a708b17a111b16a121b17a,2a90b281a30b17a708b16a111b17a121b17a,a89b266abab13a30b17a708b17a110b17a121b17a,a88b266a5b9ab2a30b16a710b16a110b17a121b16a,a88b266a5b8a3ba30b17a709b16a110b17a121b17a,a88b248a2b12ab2a7bab3a5ba31b16a708b17a110b16a123b16a,a87b245ab2a4bab9aba12ba37b16a31b576a101b17a110b17a122b16a,a85b246a2ba8b2ab4a52b17a31b576a101b17a111b16a121b17a,a83b230ab14a5ba8ba2b4a52b17a31b576a101b17a111b16a121b17a,a84b227aba2b3a3b7a17b3a53b17a31b576a101b16a111b17a121b17a,a79b3a2b207a3b3ab9ab2a6ba5b5a19ba54b17a31b576a101b16a107b2a2b17a2b2a117b17a,a78b212a5ba5b5a17b3a75b16a32b576a102b16a105b4ab17ab4a116b16a,a77b210a15b3a96b16a32b576a102b16a104b29a115b17a,a77b210a115b16a31b576a101b17a104b29a116b16a,a76b210a116b16a31b576a101b17a104b29a116b16a,a77b208a116b17a52b7a521b7a121b17a104b29a115b17a,a76b208a117b17a52b7a521b7a121b17a104b29a111b2a2b17a2b2a,a75b209a117b17a52b7a521b7a121b16a105b29a110b4ab17ab4a,a75b209a117b17a52b7a521b7a121b17a104b29a109b29a,a75b209a117b16a53b7a521b7a122b16a105b27a110b29a,a75b209a117b17a52b7a521b7a74b7a41b16a107b23a112b29a,a75b209a118b16a52b7a521b7a69b16a36b17a107b23a112b29a,a74b209a119b16a52b7a521b7a67b19a35b17a105b27a68b3a39b29a156b3a,a74b209a118b17a52b7a521b7a66b20a35b17a103b30a8ba43b2a6ba5b5a19ba18b29a141b2a6ba5b5a19ba,a73b210a118b17a52b7a521b7a65b22a34b17a101b32a7b3a40b5a4b3a3b7a17b3a17b29a139b5a4b3a3b7a17b3a,a73b210a118b17a52b7a521b7a64b24a33b16a101b33a4ba2b4a38b7a2b14a5ba8ba2b4a17b27a7b3a129b7a2b14a5ba8ba2b4a,a72b211a118b17a52b7a521b7a63b25a33b17a42b3a54b34a4ba2b4a14b3a20b26a3ba8ba2b4a19b23a2ba5b5a19ba107b26a3ba8ba2b4a,a72b211a118b16a53b7a521b7a63b25a34b16a27b2a6ba5b5a19ba27b3a2b35aba2bab6aba4ba5b5a13b3a2b28a2b2a4ba2b7a2ba12bab29a3b7a17b3a100b3a2b28a2b2a4ba2bab5a2ba,a71b212a118b17a52b7a521b7a62b26a34b16a25b5a4b3a3b7a17b3a25b43ab2ab9a2b3a2b8a2ba8b39a2b2ab9ab2a7bab43a5ba8ba2b4a48b3a41b2a4b39a2b2ab2ab6ab,a70b213a119b16a52b7a521b7a62b26a33b17a24b7a2b14a5ba8ba2b4a22b73a2ba2ba3b59a5b48a3ba3b3a2ba2b4a33b2a6ba5b5a19ba18b5ab41ab,a69b214a119b16a52b7a521b7a62b26a33b17a23b26a3ba8ba2b4a14b2ab3ab77ab3ab60a5b49a2b2ab5abab5a2ba8ba3ba15b5a4b3a3b7a17b3a16b,a69b214a118b17a52b7a521b7a62b26a33b17a17b3a2b28a2b2a4ba2bab5a2ba9b152abab62ab6ab2a6b6a5ba8b7a2b14a5ba8ba2b4a13b,a69b213a119b17a52b7a521b7a62b26a33b17a16b39a2b2ab2ab6ab2a7b229a2ba2b8a3ba7b26a3ba8ba2b4a8b3ab,a68b214a119b17a52b7a521b7a62b26a33b16a15b41ab17a5b230a2ba2b9ab2ab3a2b28a2b2a4ba2bab5a2ba4b,g207b75g,g208b74g,2g209b72g,g209b71g,g209b70g,g210b70g,g209b72g,g210b72g,g211b71g,g210b72g,g211b70g';