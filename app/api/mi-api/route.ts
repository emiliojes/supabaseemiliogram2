import { supabase } from '../../utils/client'

export async function GET() {
  const { data, error } = await supabase.from('tabla').select('*')
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'content-type': 'application/json' } })
  return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { data, error } = await supabase.from('tabla').insert(body)
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'content-type': 'application/json' } })
  return new Response(JSON.stringify(data), { status: 200, headers: { 'content-type': 'application/json' } })
}
