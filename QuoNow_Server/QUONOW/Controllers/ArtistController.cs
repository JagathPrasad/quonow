using QUONOW.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QUONOW.Controllers
{
    public class ArtistController : ApiController
    {
        private QUONOWEntities db = new QUONOWEntities();


        public ArtistController()
        {

        }

        public dynamic GetArtist()
        {
            try
            {
                var artistList = this.db.Artists.Select(x => new
                {
                    artistName = x.Name,
                    skill = x.Skill,
                    location = x.Location,
                    isAvailable = true,
                    price = x.Price,
                    description = x.Description
                }).ToList();
                return Ok(artistList);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // [Route("PostSaveArtist")]
        public IHttpActionResult PostSaveArtist(Artist artist)
        {
            try
            {
                //Artist artist = new Artist();
                this.db.Artists.Add(artist);
                this.db.SaveChanges();
                return Ok(true);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
