import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import {isPast} from "date-fns"
import { useParams } from "react-router-dom";


const GET_LESSONS_QUERY = gql`
query MyQuery($tslug: String) {
teacher(where: {tslug: $tslug}) {
  lessons {
    id
    slug
    lessonType
    availableAt
    description
    title
  }
}
}
`
interface GetLessonsQueryResponse {
teacher:{ 
 lessons: {
   id: string,
   title: string,
   slug: string,
   availableAt: string,
   lessonType: "live" | "class",
 }[]
}
}

interface TeacherProps {
  teacherSlug : string
}

export function Sidebar(props: TeacherProps) {
  
 
  const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY, {
    variables: {
      tslug: props.teacherSlug
    }
  })

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="items-center font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogramaa de aulas
      </span>
      <div className="flex-col gap-8">
        {data?.teacher.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              tslug={props.teacherSlug}
            />
          )
        })}
      </div>
    </aside>
  )
}