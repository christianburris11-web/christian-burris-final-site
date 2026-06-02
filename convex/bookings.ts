import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    startTime: v.number(),
  },
  returns: v.id("bookings"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("bookings", {
      name: args.name,
      email: args.email,
      startTime: args.startTime,
    });
  },
});

export const list = query({
  args: {},
  returns: v.array(
    v.object({
      _id: v.id("bookings"),
      _creationTime: v.number(),
      name: v.string(),
      email: v.string(),
      startTime: v.number(),
    })
  ),
  handler: async (ctx) => {
    return await ctx.db.query("bookings").order("desc").collect();
  },
});
