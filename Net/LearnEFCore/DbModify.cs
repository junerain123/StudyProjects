using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LearnEFCore
{
    class DbModify
    {
        static void Main()
        {
            using var context = new DemoContext();

            // 跳过1个，取前面3个
            var leagues = context.Leagues.Skip(1).Take(3).ToList();

            foreach (var league in leagues)
            {
                league.Name += "~";
            }
            context.SaveChanges();
        }
    }
}
