using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LearnEFCore.Model
{
    // 联赛
    public class League
    {
        // 0 编号
        public int Id { get; set; }

        // 1 联赛名称
        [Required, MaxLength(100)]
        public string Name { get; set; }

        // 2 国家
        public string Country { get; set; }
    }
}
