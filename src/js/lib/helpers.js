export const makeParam = (str) => {
	return str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
}

export const paramToString = (str) => {
	return str.replace(/_/g, ' ')
}

export const buildImg = (name) => {
	let img_ref = name.toLowerCase().split(' ').join('_')
	return img_ref

}
