/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8onIwJEgsyd
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function MemoryCard({ chatMemory }: { chatMemory: { id: Number, title: string, content: string } }) {
  return (
    <Card className="relative">
      <div className="absolute top-2 right-2 flex space-x-2">
        <Button size="icon" variant="ghost">
          <PencilIcon className="h-4 w-4" />
          <span className="sr-only">Modify</span>
        </Button>
        <Button size="icon" variant="ghost">
          <TrashIcon className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
      <CardHeader className="text-center">
        <CardTitle>{chatMemory.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {chatMemory.content}
      </CardContent>
    </Card>
  )
}


function PencilIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2v2" />
    </svg>
  )
}
