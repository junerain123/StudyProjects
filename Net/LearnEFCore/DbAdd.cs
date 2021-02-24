using LearnEFCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LearnEFCore
{
    class DbAdd
    {
        static void Main()
        {
            using var context = new DemoContext();

            var leagueA = context.Leagues.Single(l => l.Name == "LeagueA");

            var leagueB = new League()
            {
                Country = "Italy",
                Name = "LeagueB",
            };

            var leagueC = new League()
            {
                Country = "Italy",
                Name = "LeagueC",
            };

            var milan = new Club()
            {
                Name = "AC Milan",
                City = "Milan",
                DateOfEstablishment = new DateTime(1899, 12, 16),
                League = leagueA,
            };
            context.AddRange(leagueB, leagueC, milan);
            //context.Leagues.AddRange(leagueB, leagueC);
            //context.Leagues.AddRange(new list<league> {leagueB, leagueC});

            var count = context.SaveChanges();
        }
    }
}
