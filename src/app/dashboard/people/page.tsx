'use client';

import PeopleContent from '@/components/dashboard/people/PeopleContent';
import HeaderBreadcrumbs from '@/components/HeaderBreadcrumb';
import useLocales from '@/hooks/useLocales';

const People = () => {
  const { translate } = useLocales();

  return (
    <>
      <HeaderBreadcrumbs
        heading={translate('dashboard.characters.headerBreadcrumb.heading')}
        items={[
          translate('dashboard.characters.headerBreadcrumb.dashboard'),
          translate('dashboard.characters.headerBreadcrumb.characters'),
          translate('dashboard.characters.headerBreadcrumb.list'),
        ]}
      />

      <PeopleContent />
    </>
  );
};

export default People;
