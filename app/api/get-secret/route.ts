// app/api/get-secret/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const myTestVariable = process.env.MIN_TEST_VARIABEL || "### VARIABEL MANGLER (undefined) ###";
  return NextResponse.json({ secret: myTestVariable });
}
