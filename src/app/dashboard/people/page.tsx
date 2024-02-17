import PeopleContent from '@/components/dashboard/people/PeopleContent';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumb';

const People = () => {
  return (
    <>
      <HeaderBreadcrumbs heading="Karakterek" items={['Verérlőpult', 'Karakterek', 'Lista']} />

      <PeopleContent />
    </>
  );
};

export default People;
