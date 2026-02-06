export type GetTrackDetailOutputData = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null,
    }
}

type DetTrackDetailOutputData = {data: GetTrackDetailOutputData}

export const getTrack = (trackId: string) => {
    const promise: Promise<DetTrackDetailOutputData> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            'api-key': '0c079638-275a-452a-abdb-7031649819d6'
        }
    }).then(res => res.json())
    return promise
}

export type T = {
    id: string,
    attributes: TrackListItemAttributes
}

type TrackListItemAttributes = {
    title: string,
    attachments: Array<{ url: string }>
}

type GetTrackListOutput = {data: Array<T>}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> =  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '0c079638-275a-452a-abdb-7031649819d6'
        }
}).then(res => res.json())
    return promise
}