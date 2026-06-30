/***********************************************
 > 𝐀𝐮𝐭𝐡𝐨𝐫:  𝑨𝒅𝒎𝒊𝒏: 𝒀𝒐𝒖𝒏𝒋 𝑶𝑺 🐼
***********************************************/
// 📌 𝐍𝐨𝐭𝐞: 𝐓𝐡𝐢𝐬 𝐌𝐨𝐝𝐮𝐥𝐞,𝐬𝐜𝐫𝐢𝐩𝐭.𝐣𝐬 𝐟𝐢𝐥𝐞 𝐢𝐬 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐊𝐇𝐎𝐍𝐆 𝐌𝐀𝐍𝐇 𝐘𝐄𝐍. 
// 𝐏𝐥𝐞𝐚𝐬𝐞 𝐝𝐨 𝐧𝐨𝐭 𝐞𝐝𝐢𝐭 𝐰𝐢𝐭𝐡𝐨𝐮𝐭 𝐩𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 🩵
// 𝐋𝐮̛𝐮 𝐲́ 𝐤𝐡𝐢 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ⚠️𝐃𝐨𝐚̣𝐧 𝐦𝐚̃ 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐝𝐚̀𝐧𝐡 𝐜𝐡𝐨 𝐦𝐮̣𝐜 𝐝𝐢́𝐜𝐡 𝐦𝐨̛̉ 𝐤𝐡𝐨𝐚́ 𝐯𝐢𝐩 𝐜𝐡𝐨 𝐮̛́𝐧𝐠 𝐝𝐮̣𝐧𝐠. 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐬𝐚𝐨 𝐜𝐡𝐞́𝐩 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚́𝐧 𝐥𝐚̣𝐢! ❗️
// 🫆 𝐋𝐢𝐧𝐤 𝐛𝐢𝐨 𝐭𝐚̉𝐢 𝐱𝐮𝐨̂́𝐧𝐠: 𝐡𝐭𝐭𝐩𝐬://𝐲𝐨𝐮𝐧𝐣.𝐢𝐨.𝐯𝐧/
/******************************
𝑨𝒅𝒎𝒊𝒏: 𝒀𝒐𝒖𝒏𝒋 𝑶𝑺 🐼
𝑭𝒂𝒄𝒆𝒃𝒐𝒐𝒌:𝑲𝒉𝒐𝒏𝒈 𝑴𝒂𝒏𝒉 𝒀𝒆𝒏 👑 
𝑪𝒐𝒏𝒕𝒂𝒄𝒕:
𝒛𝒍:𝟎𝟗𝟖𝟏.𝟑𝟎𝟗.𝟗𝟐𝟏
𝑻𝒆𝒍𝒆𝒈𝒂𝒎: 𝒚𝒐𝒖𝒏𝒋_𝒊𝒄𝒍𝒐𝒖𝒅
*******************************/
const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
	'HTTPBot': { name: 'rc_lifetime', id: 'com.behindtechlines.HTTPBot.prounlock' },
	'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
	'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly' }
};
const data = {
	"expires_date": "2030-02-18T07:52:54Z",
	"original_purchase_date": "2020-02-11T07:52:55Z",
	"purchase_date": "2020-02-11T07:52:54Z"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
	obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
	
    // FIX 1: Đã thêm chữ "s" vào entitlements
	obj.subscriber.entitlements = obj.subscriber.entitlements || {}; 
	
	let isModified = false;
	for (const i in list) {
		if (new RegExp(`^${i}`, `i`).test(ua)) {
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			isModified = true; // Xác nhận đây là VSCO (hoặc HTTPBot/1Blocker)
			break;
		}
	}
	
    // FIX 2: Chỉ ghi đè body nếu đúng là VSCO, để yên cho Locket sống
	if (isModified) {
		resp.body = JSON.stringify(obj);
	}
}

$done(resp);

/******************************
Tính năng chính của JavaScript: Mở khóa toàn bộ bộ lọc màu chất lượng cao, bao gồm Film X và nhiều phong cách điện ảnh của VSCO.
Link bio tải xuống: https://younj.io.vn
Phiên bản JavaScript: v5.2
Cập nhật: ngày 30 tháng 6 năm 2026
Vui lòng liên hệ: Facebook:Khong Manh Yen👑
𝐋𝐮̛𝐮 𝐲́ 𝐤𝐡𝐢 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ⚠️𝐃𝐨𝐚̣𝐧 𝐦𝐚̃ 𝐧𝐚̀𝐲 𝐜𝐡𝐢̉ 𝐝𝐚̀𝐧𝐡 𝐜𝐡𝐨 𝐦𝐮̣𝐜 𝐝𝐢́𝐜𝐡 𝐦𝐨̛̉ 𝐤𝐡𝐨𝐚́ 𝐯𝐢𝐩 𝐜𝐡𝐨 𝐮̛́𝐧𝐠 𝐝𝐮̣𝐧𝐠. 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐤𝐡𝐨̂𝐧𝐠 𝐬𝐚𝐨 𝐜𝐡𝐞́𝐩 𝐡𝐨𝐚̣̆𝐜 𝐛𝐚́𝐧 𝐥𝐚̣𝐢! ❗️
*******************************/
