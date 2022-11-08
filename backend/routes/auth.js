const passport = require("passport")
const JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt
// only user model in this file so far 
const User = require("../models/models.js")

