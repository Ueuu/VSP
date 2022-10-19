using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class CardsDbContext : DbContext
    {
        public CardsDbContext(DbContextOptions options) : base(options)
        {

        }
        //Dbset

        public DbSet<Card> Cards { get; set; }
    }
}
