//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BookStore.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Book
    {
        public long BookID { get; set; }
        public string Title { get; set; }
        public string AuthorName { get; set; }
        public Nullable<decimal> Price { get; set; }
    }
}
