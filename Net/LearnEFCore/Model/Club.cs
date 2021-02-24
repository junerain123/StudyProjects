using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace LearnEFCore.Model
{
    // 俱乐部
    public class Club
    {
        public Club()
        {
            Players = new List<Player>();
        }

        // 0 编号
        public int Id { get; set; }

        // 1 姓名
        public string Name { get; set; }

        // 2 城市
        public string City { get; set; }

        // 3 成立日期
        [Column(TypeName = "date")]
        public DateTime DateOfEstablishment { get; set; }

        // 4 历史
        public string History { get; set; }

        // 5 【导航属性】 所属联赛
        public League League { get; set; }

        // 6 【导航属性】 选手们
        public List<Player> Players { get; set; }
    }
}
