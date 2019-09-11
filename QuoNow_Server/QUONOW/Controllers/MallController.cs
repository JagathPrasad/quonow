using QUONOW.Models;
using QUONOW.Pattern.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QUONOW.Controllers
{
    public class MallController : ApiController
    {
        public UnitOfWork uow;
        QUONOWEntities db;

        public MallController()
        {
            this.db = new QUONOWEntities();
            this.uow = new UnitOfWork(this.db);

        }

        
        public dynamic GetMalls()
        {
            try
            {
                var getMalls = this.db.Malls.Select(x => new
                {
                    mallName = x.Name,
                    location = x.Location,
                    isAvailable = true,
                    price = x.Price,
                    description = x.Description

                }).ToList();

                return Ok(getMalls);

            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }
    }
}
