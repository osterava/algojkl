import { useQuery } from '@tanstack/react-query'
import client from '../components/contentful'

const fetchContentfulData = async () => {
  const [
    eventsRes,
    collabsRes,
    diamondCollabsRes,
    hallitusRes,
    tutorRes,
    pytkirjatRes,
    jasenedutRes,
  ] = await Promise.all([
    client.getEntries({ content_type: 'events' }),
    client.getEntries({ content_type: 'collabs' }),
    client.getEntries({ content_type: 'diamondCollab' }),
    client.getEntries({ content_type: 'hallitus' }),
    client.getEntries({ content_type: 'tutorit' }),
    client.getEntries({ content_type: 'pytkirjat' }),
    client.getEntries({ content_type: 'jedut' }),
  ])

  return {
    events: eventsRes.items.map((item) => ({
      id: item.fields.eventId,
      title: item.fields.eventTitle,
      description: item.fields.eventDesc,
      date: item.fields.eventDateTime,
      picture: item.fields.eventPicture,
      url: item.fields.eventUrl,
    })),
    collabs: collabsRes.items.map((item) => ({
      id: item.fields.collabId,
      logo: item.fields.collabLogo,
      url: item.fields.collabUrl,
    })),
    diamondCollabs: diamondCollabsRes.items.map((item) => ({
      id: item.fields.diamondCollabId,
      logo: item.fields.diamondCollabLogo,
      url: item.fields.diamondCollabUrl,
    })),
    hallitus: hallitusRes.items.map((item) => ({
      pesti: item.fields.pesti,
      lispesti: item.fields.lispesti,
      telegram: item.fields.telegram,
      sp: item.fields.sp,
      nimi: item.fields.nimi,
      kuva: item.fields.kuva.fields.file.url,
      id: item.fields.halliId,
    })),
    tutorit: tutorRes.items.map((item) => ({
      tutorKuva: item.fields.tutorKuva.fields.file.url,
      nimi: item.fields.nimi,
      esittelyteksti: item.fields.esittelyteksti,
    })),
    pytkirjat: pytkirjatRes.items.map((item) => ({
      id: item.fields.kirjaId,
      pytkirjaTittle: item.fields.pytkirjaTittle,
      pytkirja: `https:${item.fields.pytkirja.fields.file.url}`,
    })),
    jasenedut: jasenedutRes.items.map((item) => ({
      id: item.fields.jedutId,
      otsikkofirma: item.fields.otsikkofirma,
      kuvaus: item.fields.jedutDesc,
      kuvaUrl: item.fields.jedutKuva?.fields?.file?.url || null,
    })),
  }
}

export const useContentfulData = () => {
  return useQuery({
    queryKey: ['contentfulData'],
    queryFn: fetchContentfulData,
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60 * 24,
  })
}
