import fetch from "node-fetch";

const getDetails = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/detail?netflixid=${id}`);
};

const getImages = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/bgimages?netflixid=${id}`);
};

const getGenres = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/genres?netflixid=${id}`);
};

const getPeople = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/people?netflixid=${id}`);
};

const getCountries = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/countries?netflixid=${id}`);
};

const getEpisodes = async (id: number): Promise<string> => {
	return dofetch(`https://unogs.com/api/title/episodes?netflixid=${id}`);
};

const getAll = async (id: number): Promise<Array<string>> => {
	return Promise.all([
		getDetails(id),
		getImages(id),
		getGenres(id),
		getPeople(id),
		getCountries(id),
		getEpisodes(id),
	]);
};

const dofetch = async (url: string): Promise<string> => {
	const res = await fetch(url, {
		headers: {
			accept: "application/json",
			"accept-language": "en-US,en-SG;q=0.9,en;q=0.8",
			referrer: "http://unogs.com",
		},
	});

	const json = await res.json();
	return json;
};

export { getDetails, getImages, getGenres, getCountries, getEpisodes, getAll };
