using Microsoft.AspNetCore.Mvc;
using System;
using WorkflowPocBackend.API.Models;

namespace WorkflowPocBackend.API.Controllers
{
  [ApiController]
  public class WorkflowPocController : ControllerBase
  {
    private PrimaryContext _context;
    public WorkflowPocController(PrimaryContext context)
    {
      _context = context;
    }

    [HttpPost("workflow-poc/add-offering-a")]
    [ProducesResponseType(typeof(string), 200)]
    [ProducesResponseType(typeof(string), 400)]
    public IActionResult AddOfferingA(string fieldA, string fieldB, string fieldC)
    {
      //logic for adding offering A goes here:
      _context.Offerings.Add(new Offering
      {
        Type = "A",
        FieldA = fieldA,
        FieldB = fieldB,
        FieldC = fieldC
      });
      _context.SaveChanges();

      return Ok();
    }

    [HttpPost("workflow-poc/add-offering-b")]
    [ProducesResponseType(typeof(string), 200)]
    [ProducesResponseType(typeof(string), 400)]
    public IActionResult AddOfferingB(string fieldA, string fieldB, string fieldC, string fieldD)
    {
      //logic for adding offering B goes here:
      _context.Offerings.Add(new Offering
      {
        Type = "B",
        FieldA = fieldA,
        FieldB = fieldB,
        FieldC = fieldC,
        FieldD = fieldD
      });
      _context.SaveChanges();

      return Ok();
    }

    [HttpPost("workflow-poc/add-user")]
    [ProducesResponseType(typeof(string), 200)]
    [ProducesResponseType(typeof(string), 400)]
    public IActionResult AddUser(Guid offeringId, string name, string surname, string address)
    {
      //logic for adding a user goes here:
      _context.Users.Add(new User
      {
        OfferingId = offeringId,
        Name = name,
        Surname = surname,
        Address = address
      });

      _context.SaveChanges();
      return Ok();
    }
  }
}
