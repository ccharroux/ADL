using System;
using System.Collections.Generic;
using System.Linq.Dynamic.Core;

namespace ADLAPICore.Library.utilities
{
    public class ClassBuilder
    {
        public ClassBuilder()
        {

        }

        public DynamicClass GetTheClass(Dictionary<string, string> items)
        {

            DynamicClass dynamicClass;
            List<DynamicProperty> props = new List<DynamicProperty>();

            try
            {
                foreach (var item in items)
                {
                    var entry = new DynamicProperty(item.Key, typeof(string));
                    
                    props.Add(entry);
                }

                Type type = DynamicClassFactory.CreateType(props);

                dynamicClass = Activator.CreateInstance(type) as DynamicClass;

                foreach (var item in items)
                {
                    //                    dynamicClass[item.Key] = item.Value;
                    dynamicClass.SetDynamicPropertyValue(item.Key,  (item.Value.Equals(null) ? "" : item.Value));

                }

                return dynamicClass;
            }

            catch (Exception)
            {
                return null;
            }
        }

    }

}