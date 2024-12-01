'use server';

import { NextResponse } from "next/server";
import db  from '../../../../models'
import { Message } from "@mui/icons-material";
export async function GET() {
    const movies = await db?.Movies.findAll({
        attributes: ['id', 'title', 'director', 'release_year', 'genre', 'rating', 'img', 'details', 'link'],
      });
      
    return NextResponse.json({
        data : movies,
        Message : "ok"
    });
}