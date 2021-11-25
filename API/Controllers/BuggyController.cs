using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }
         
        //[Authorize]
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var things = _context.Users.Find(-1);
            if(things==null) return NotFound();
            return Ok(things);

        }

       // [Authorize]
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
           var things = _context.Users.Find(-1);
           var thingToReturn=things.ToString();
           return thingToReturn;

        } 

        //[Authorize]
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadReqquest()
        {
          return BadRequest("This is not a good request");

        }
    }
}