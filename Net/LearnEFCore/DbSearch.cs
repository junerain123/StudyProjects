using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LearnEFCore
{
    class DbSearch
    {
        static void Main()
        {
            using var context = new DemoContext();

            // FirstOrDefault
            var league1 = context.Leagues.FirstOrDefault(l => l.Country == "Italy");

            // where
            var league2 = context.Leagues
                .Where(l => l.Country == "Italy")
                //.Where(l => l.Country.Contains("e")
                .ToList();

            //var league3 = (from lg in context.Leagues
            //                where lg.Country == "Italy"
            //                select lg).ToList();

            // LastOrDefault，需要先排序OrderBy
            var league4 = context.Leagues
                .OrderBy(l => l.Id)
                .LastOrDefault(l => l.Country == "Italy");

            // Find()优先从之前查询过的内存中查询
            var leagueFind = context.Leagues.Find(2);

            foreach (var league in context.Leagues)
            {
                Console.WriteLine(league.Name);
            }
            //Tolist(), First(), FirstOrDefault()
            //Single(), SingleOrDefault(), Last(), LastOrDefault(),
            //Count(), LongCount(), Min(), Averge(), Sum(),
            //Find(),
        }
    }
}
