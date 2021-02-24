using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LearnEFCore
{
    class DbDelete
    {
        static void Main()
        {
            using var context = new DemoContext();

            // 只能删除被跟踪的数据
            var milan = context.Clubs.Single(club => club.Name == "Milan");
            context.Clubs.Remove(milan);

            // context.RemoveRange(milan, milan2);

            context.SaveChanges();
        }
    }
}
