using System;
using System.Collections.Generic;
using System.Text;

namespace LearnEFCore.Model
{
    // 简历
    public class Resume
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public int PlayerId { get; set; }
        public Player Player { get; set; }
    }
}
