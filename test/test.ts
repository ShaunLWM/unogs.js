import { getAll } from "../src";

(async () => {
	try {
		const res = await getAll(80100929);
		console.log(res);
	} catch (e) {
		console.error(e);
	}
})();
